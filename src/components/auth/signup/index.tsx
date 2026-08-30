"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState<FieldErrors>(INITIAL_ERRORS);
  const [hasSubmitted, setHasSubmitted] = useState(false);

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const nextErrors = validate();
    setHasSubmitted(true);
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      return;
    }

    // TODO: 회원가입 API 연동
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (hasSubmitted) {
      setErrors(validate({ email: value }));
    }
  };

  const handleNameChange = (value: string) => {
    setName(value);

    if (hasSubmitted) {
      setErrors(validate({ name: value }));
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);

    if (hasSubmitted) {
      setErrors(validate({ password: value }));
    }
  };

  const handlePasswordConfirmChange = (value: string) => {
    setPasswordConfirm(value);

    if (hasSubmitted) {
      setErrors(validate({ passwordConfirm: value }));
    }
  };

  const hasErrors = Object.values(errors).some(Boolean);

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
                입력 내용을 확인해 주세요.
              </p>
            )}

            <button type="submit" className={styles.submitButton}>
              회원가입
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
