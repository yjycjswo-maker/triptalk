module.exports = [
"[project]/src/components/auth/login/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/mutations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/auth/login/styles.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function getLoginErrorMessage(error) {
    return error instanceof Error ? error.message : "로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
}
function LoginForm() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        email: false,
        password: false
    });
    const [hasSubmitted, setHasSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loginError, setLoginError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loginUser, { loading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOGIN_USER"]);
    const isEmailValid = (value)=>EMAIL_PATTERN.test(value.trim());
    const isPasswordValid = (value)=>value.trim().length > 0;
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const nextErrors = {
            email: !isEmailValid(email),
            password: !isPasswordValid(password)
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
                    password
                }
            });
            const accessToken = data?.loginUser?.accessToken;
            if (!accessToken) {
                throw new Error("로그인 토큰을 받지 못했습니다.");
            }
            localStorage.setItem("accessToken", accessToken);
            router.replace("/trip-talk");
        } catch (error) {
            setLoginError(getLoginErrorMessage(error));
        }
    };
    const handleEmailChange = (value)=>{
        setEmail(value);
        setLoginError(null);
        if (hasSubmitted) {
            setErrors((currentErrors)=>({
                    ...currentErrors,
                    email: !isEmailValid(value)
                }));
        }
    };
    const handlePasswordChange = (value)=>{
        setPassword(value);
        setLoginError(null);
        if (hasSubmitted) {
            setErrors((currentErrors)=>({
                    ...currentErrors,
                    password: !isPasswordValid(value)
                }));
        }
    };
    const hasErrors = errors.email || errors.password || Boolean(loginError);
    const errorMessage = loginError ?? "아이디 또는 비밀번호를 확인해 주세요.";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrap,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formSide,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/trip-talk",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/icon/logo/black_size_m.svg",
                                alt: "TRIP TRIP",
                                width: 72,
                                height: 44,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/login/index.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/login/index.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "트립트립에 오신걸 환영합니다."
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/login/index.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "트립트립에 로그인 해세요."
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/login/index.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                            onSubmit: handleSubmit,
                            noValidate: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "이메일을 입력해 주세요.",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.email ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ""}`,
                                    value: email,
                                    onChange: (event)=>handleEmailChange(event.target.value),
                                    "aria-invalid": errors.email,
                                    "aria-describedby": hasErrors ? "login-error" : undefined
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/login/index.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "비밀번호를 입력해 주세요.",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.password ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ""}`,
                                    value: password,
                                    onChange: (event)=>handlePasswordChange(event.target.value),
                                    "aria-invalid": errors.password,
                                    "aria-describedby": hasErrors ? "login-error" : undefined
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/login/index.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                hasErrors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "login-error",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    role: "alert",
                                    children: errorMessage
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/login/index.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton,
                                    disabled: loading,
                                    children: loading ? "로그인 중..." : "로그인"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/login/index.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/login/index.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/signup",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].signupLink,
                            children: "회원가입"
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/login/index.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/login/index.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/auth/login/index.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageSide,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/img/login/Rectangle%203109.png",
                    alt: "",
                    fill: true,
                    priority: true,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/login/index.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/auth/login/index.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/auth/login/index.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/auth/login/styles.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "errorMessage": "styles-module__8AUjmW__errorMessage",
  "form": "styles-module__8AUjmW__form",
  "formInner": "styles-module__8AUjmW__formInner",
  "formSide": "styles-module__8AUjmW__formSide",
  "image": "styles-module__8AUjmW__image",
  "imageSide": "styles-module__8AUjmW__imageSide",
  "input": "styles-module__8AUjmW__input",
  "inputError": "styles-module__8AUjmW__inputError",
  "logo": "styles-module__8AUjmW__logo",
  "signupLink": "styles-module__8AUjmW__signupLink",
  "submitButton": "styles-module__8AUjmW__submitButton",
  "subtitle": "styles-module__8AUjmW__subtitle",
  "title": "styles-module__8AUjmW__title",
  "wrap": "styles-module__8AUjmW__wrap",
});
}),
"[project]/src/graphql/mutations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CREATE_USER",
    ()=>CREATE_USER,
    "LOGIN_USER",
    ()=>LOGIN_USER,
    "UPDATE_USER_PICTURE",
    ()=>UPDATE_USER_PICTURE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/graphql-tag/lib/index.js [app-ssr] (ecmascript)");
;
const LOGIN_USER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
const CREATE_USER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;
const UPDATE_USER_PICTURE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  mutation UpdateUserPicture($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      picture
    }
  }
`;
}),
];

//# sourceMappingURL=src_0xa7glg._.js.map