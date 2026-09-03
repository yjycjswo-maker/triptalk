"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { LOGIN_USER } from "@/graphql/mutations";
import { getSafeReturnTo } from "@/lib/auth-client";
import styles from "./styles.module.css";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getLoginErrorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : "로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
}

type LoginUserData = {
  loginUser: {
    accessToken: string;
  };
};

type LoginUserVariables = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginUser, { loading }] = useMutation<
    LoginUserData,
    LoginUserVariables
  >(LOGIN_USER);

  const isEmailValid = (value: string) => EMAIL_PATTERN.test(value.trim());
  const isPasswordValid = (value: string) => value.trim().length > 0;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const nextErrors = {
      email: !isEmailValid(email),
      password: !isPasswordValid(password),
    };

    setHasSubmitted(true);
    setErrors(nextErrors);

    if (nextErrors.email || nextErrors.password) {
      return;
    }

    setLoginError(null);

    try {
      const { data } = await loginUser({
        variables: {
          email: email.trim(),
          password,
        },
      });
      const accessToken = data?.loginUser?.accessToken;

      if (!accessToken) {
        throw new Error("로그인 토큰을 받지 못했습니다.");
      }

      localStorage.setItem("accessToken", accessToken);
      router.replace(getSafeReturnTo(window.location.search));
    } catch (error) {
      setLoginError(getLoginErrorMessage(error));
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setLoginError(null);

    if (hasSubmitted) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        email: !isEmailValid(value),
      }));
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setLoginError(null);

    if (hasSubmitted) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        password: !isPasswordValid(value),
      }));
    }
  };

  const hasErrors = errors.email || errors.password || Boolean(loginError);
  const errorMessage = loginError ?? "아이디 또는 비밀번호를 확인해 주세요.";

  return (
    <div className={styles.wrap}>
      <div className={styles.formSide}>
        <div className={styles.formInner}>
          <Link href="/trip-talk" className={styles.logo}>
            <Image
              src="/icon/logo/black_size_m.svg"
              alt="TRIP TRIP"
              width={72}
              height={44}
              priority
            />
          </Link>

          <h1 className={styles.title}>트립트립에 오신걸 환영합니다.</h1>
          <p className={styles.subtitle}>트립트립에 로그인 해세요.</p>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              placeholder="이메일을 입력해 주세요."
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
              value={email}
              onChange={(event) => handleEmailChange(event.target.value)}
              aria-invalid={errors.email}
              aria-describedby={hasErrors ? "login-error" : undefined}
            />
            <input
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
              value={password}
              onChange={(event) => handlePasswordChange(event.target.value)}
              aria-invalid={errors.password}
              aria-describedby={hasErrors ? "login-error" : undefined}
            />

            {hasErrors && (
              <p id="login-error" className={styles.errorMessage} role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? "로그인 중..." : "로그인"}
            </button>
          </form>

          <Link href="/signup" className={styles.signupLink}>
            회원가입
          </Link>
        </div>
      </div>

      <div className={styles.imageSide}>
        <Image
          src="/img/login/Rectangle%203109.png"
          alt=""
          fill
          priority
          className={styles.image}
        />
      </div>
    </div>
  );
}
