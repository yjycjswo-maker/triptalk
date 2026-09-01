"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_USER } from "@/graphql/mutations";
import styles from "./styles.module.css";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = {
  email: boolean;
  name: boolean;
  password: boolean;
  passwordConfirm: boolean;
};

const INITIAL_ERRORS: FieldErrors = {
  email: false,
  name: false,
  password: false,
  passwordConfirm: false,
};

function getSignupErrorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : "회원가입 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
}

function getValidationErrorMessage(errors: FieldErrors) {
  if (errors.email) return "올바른 이메일 주소를 입력해 주세요.";
  if (errors.name) return "이름을 입력해 주세요.";
  if (errors.password) return "비밀번호를 입력해 주세요.";
  if (errors.passwordConfirm) return "비밀번호가 일치하지 않습니다.";
  return "입력 내용을 확인해 주세요.";
}

type CreateUserVariables = {
  createUserInput: {
    email: string;
    name: string;
    password: string;
  };
};

export default function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState<FieldErrors>(INITIAL_ERRORS);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [signupError, setSignupError] = useState<string | null>(null);
  const [createUser, { loading }] = useMutation<unknown, CreateUserVariables>(
    CREATE_USER,
  );

  const validate = (values: Partial<Record<keyof FieldErrors, string>> = {}): FieldErrors => {
    const nextEmail = values.email ?? email;
    const nextName = values.name ?? name;
    const nextPassword = values.password ?? password;
    const nextPasswordConfirm = values.passwordConfirm ?? passwordConfirm;

    return {
      email: !EMAIL_PATTERN.test(nextEmail.trim()),
      name: nextName.trim().length === 0,
      password: nextPassword.trim().length === 0,
      passwordConfirm:
        nextPasswordConfirm.length === 0 || nextPassword !== nextPasswordConfirm,
    };
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const nextErrors = validate();
    setHasSubmitted(true);
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      return;
    }

    setSignupError(null);

    try {
      await createUser({
        variables: {
          createUserInput: {
            email: email.trim(),
            name: name.trim(),
            password,
          },
        },
      });
      router.replace("/login");
    } catch (error) {
      setSignupError(getSignupErrorMessage(error));
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setSignupError(null);

    if (hasSubmitted) {
      setErrors(validate({ email: value }));
    }
  };

  const handleNameChange = (value: string) => {
    setName(value);
    setSignupError(null);

    if (hasSubmitted) {
      setErrors(validate({ name: value }));
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setSignupError(null);

    if (hasSubmitted) {
      setErrors(validate({ password: value }));
    }
  };

  const handlePasswordConfirmChange = (value: string) => {
    setPasswordConfirm(value);
    setSignupError(null);

    if (hasSubmitted) {
      setErrors(validate({ passwordConfirm: value }));
    }
  };

  const hasErrors = Object.values(errors).some(Boolean) || Boolean(signupError);
  const errorMessage = signupError ?? getValidationErrorMessage(errors);

  return (
    <main className={styles.wrap}>
      <section className={styles.formSide}>
        <div className={styles.formInner}>
          <Link href="/trip-talk" className={styles.logo} aria-label="트립토크로 이동">
            <Image
              src="/icon/logo/black_size_m.svg"
              alt="TRIP TRIP"
              width={72}
              height={44}
              priority
            />
          </Link>

          <h1 className={styles.title}>회원가입</h1>
          <p className={styles.subtitle}>회원가입을 위해 아래 빈칸을 모두 채워 주세요.</p>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label className={styles.field}>
              <span className={styles.label}>이메일 <em>*</em></span>
              <input
                type="email"
                placeholder="이메일을 입력해 주세요."
                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                value={email}
                onChange={(event) => handleEmailChange(event.target.value)}
                aria-invalid={errors.email}
                aria-describedby={hasErrors ? "signup-error" : undefined}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>이름 <em>*</em></span>
              <input
                type="text"
                placeholder="이름을 입력해 주세요."
                className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                value={name}
                onChange={(event) => handleNameChange(event.target.value)}
                aria-invalid={errors.name}
                aria-describedby={hasErrors ? "signup-error" : undefined}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>비밀번호 <em>*</em></span>
              <input
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
                value={password}
                onChange={(event) => handlePasswordChange(event.target.value)}
                aria-invalid={errors.password}
                aria-describedby={hasErrors ? "signup-error" : undefined}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>비밀번호 확인 <em>*</em></span>
              <input
                type="password"
                placeholder="비밀번호를 한번 더 입력해 주세요."
                className={`${styles.input} ${errors.passwordConfirm ? styles.inputError : ""}`}
                value={passwordConfirm}
                onChange={(event) => handlePasswordConfirmChange(event.target.value)}
                aria-invalid={errors.passwordConfirm}
                aria-describedby={hasErrors ? "signup-error" : undefined}
              />
            </label>

            {hasErrors && (
              <p id="signup-error" className={styles.errorMessage} role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? "가입 중..." : "회원가입"}
            </button>
          </form>

          <p className={styles.loginPrompt}>
            이미 계정이 있으신가요? <Link href="/login">로그인</Link>
          </p>
        </div>
      </section>

      <aside className={styles.imageSide} aria-hidden="true">
        <Image
          src="/img/login/Rectangle%203109.png"
          alt=""
          fill
          priority
          className={styles.image}
        />
      </aside>
    </main>
  );
}
