"use client";

import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { RESET_USER_PASSWORD } from "@/graphql/mutations";
import styles from "./styles.module.css";

export default function PasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [resetPassword, { loading }] = useMutation(RESET_USER_PASSWORD);

  const isValid =
    password.length >= 4 && password === confirmation && !loading;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isValid) return;

    try {
      setMessage("");
      await resetPassword({ variables: { password } });
      setPassword("");
      setConfirmation("");
      setIsComplete(true);
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "비밀번호 변경에 실패했습니다.",
      );
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>비밀번호 변경</h2>

      <label className={styles.field}>
        <span>새 비밀번호 <b>*</b></span>
        <input
          type="password"
          autoComplete="new-password"
          placeholder="새 비밀번호를 입력해 주세요."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      <label className={styles.field}>
        <span>새 비밀번호 확인 <b>*</b></span>
        <input
          type="password"
          autoComplete="new-password"
          placeholder="새 비밀번호를 확인해 주세요."
          value={confirmation}
          onChange={(event) => setConfirmation(event.target.value)}
        />
      </label>

      {confirmation && password !== confirmation && (
        <p className={styles.error}>비밀번호가 일치하지 않습니다.</p>
      )}
      {message && <p className={styles.message}>{message}</p>}

      <div className={styles.actions}>
        <button type="submit" disabled={!isValid}>
          {loading ? "변경 중..." : "비밀번호 변경"}
        </button>
      </div>

      {isComplete && (
        <div className={styles.modalBackdrop} role="presentation">
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="password-complete-title"
          >
            <h3 id="password-complete-title">비밀번호 변경 완료</h3>
            <p>비밀번호가 변경 되었습니다.</p>
            <button type="button" onClick={() => setIsComplete(false)} autoFocus>
              확인
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
