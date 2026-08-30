"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const isEmailValid = (value: string) => EMAIL_PATTERN.test(value.trim());
  const isPasswordValid = (value: string) => value.trim().length > 0;

  const handleSubmit = (event: React.FormEvent) => {
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

    // TODO: 로그인 API 연동
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (hasSubmitted) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        email: !isEmailValid(value),
      }));
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);

    if (hasSubmitted) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        password: !isPasswordValid(value),
      }));
    }
  };

  const hasErrors = errors.email || errors.password;

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
                아이디 또는 비밀번호를 확인해 주세요.
              </p>
            )}

            <button type="submit" className={styles.submitButton}>
              로그인
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
