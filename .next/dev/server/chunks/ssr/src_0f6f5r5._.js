module.exports = [
"[project]/src/components/auth/signup/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignupForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/mutations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/auth/signup/styles.module.css [app-ssr] (css module)");
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
const INITIAL_ERRORS = {
    email: false,
    name: false,
    password: false,
    passwordConfirm: false
};
function getSignupErrorMessage(error) {
    return error instanceof Error ? error.message : "회원가입 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
}
function getValidationErrorMessage(errors) {
    if (errors.email) return "올바른 이메일 주소를 입력해 주세요.";
    if (errors.name) return "이름을 입력해 주세요.";
    if (errors.password) return "비밀번호를 입력해 주세요.";
    if (errors.passwordConfirm) return "비밀번호가 일치하지 않습니다.";
    return "입력 내용을 확인해 주세요.";
}
function SignupForm() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [passwordConfirm, setPasswordConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_ERRORS);
    const [hasSubmitted, setHasSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [signupError, setSignupError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [createUser, { loading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CREATE_USER"]);
    const validate = (values = {})=>{
        const nextEmail = values.email ?? email;
        const nextName = values.name ?? name;
        const nextPassword = values.password ?? password;
        const nextPasswordConfirm = values.passwordConfirm ?? passwordConfirm;
        return {
            email: !EMAIL_PATTERN.test(nextEmail.trim()),
            name: nextName.trim().length === 0,
            password: nextPassword.trim().length === 0,
            passwordConfirm: nextPasswordConfirm.length === 0 || nextPassword !== nextPasswordConfirm
        };
    };
    const handleSubmit = async (event)=>{
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
                        password
                    }
                }
            });
            router.replace("/login");
        } catch (error) {
            setSignupError(getSignupErrorMessage(error));
        }
    };
    const handleEmailChange = (value)=>{
        setEmail(value);
        setSignupError(null);
        if (hasSubmitted) {
            setErrors(validate({
                email: value
            }));
        }
    };
    const handleNameChange = (value)=>{
        setName(value);
        setSignupError(null);
        if (hasSubmitted) {
            setErrors(validate({
                name: value
            }));
        }
    };
    const handlePasswordChange = (value)=>{
        setPassword(value);
        setSignupError(null);
        if (hasSubmitted) {
            setErrors(validate({
                password: value
            }));
        }
    };
    const handlePasswordConfirmChange = (value)=>{
        setPasswordConfirm(value);
        setSignupError(null);
        if (hasSubmitted) {
            setErrors(validate({
                passwordConfirm: value
            }));
        }
    };
    const hasErrors = Object.values(errors).some(Boolean) || Boolean(signupError);
    const errorMessage = signupError ?? getValidationErrorMessage(errors);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrap,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formSide,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/trip-talk",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                            "aria-label": "트립토크로 이동",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/icon/logo/black_size_m.svg",
                                alt: "TRIP TRIP",
                                width: 72,
                                height: 44,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/signup/index.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/signup/index.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "회원가입"
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/signup/index.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "회원가입을 위해 아래 빈칸을 모두 채워 주세요."
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/signup/index.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                            onSubmit: handleSubmit,
                            noValidate: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: [
                                                "이메일 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/signup/index.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 50
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/auth/signup/index.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "이메일을 입력해 주세요.",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.email ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ""}`,
                                            value: email,
                                            onChange: (event)=>handleEmailChange(event.target.value),
                                            "aria-invalid": errors.email,
                                            "aria-describedby": hasErrors ? "signup-error" : undefined
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/auth/signup/index.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/auth/signup/index.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: [
                                                "이름 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/signup/index.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/auth/signup/index.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "이름을 입력해 주세요.",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.name ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ""}`,
                                            value: name,
                                            onChange: (event)=>handleNameChange(event.target.value),
                                            "aria-invalid": errors.name,
                                            "aria-describedby": hasErrors ? "signup-error" : undefined
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/auth/signup/index.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/auth/signup/index.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: [
                                                "비밀번호 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/signup/index.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 51
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/auth/signup/index.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            placeholder: "비밀번호를 입력해 주세요.",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.password ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ""}`,
                                            value: password,
                                            onChange: (event)=>handlePasswordChange(event.target.value),
                                            "aria-invalid": errors.password,
                                            "aria-describedby": hasErrors ? "signup-error" : undefined
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/auth/signup/index.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/auth/signup/index.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: [
                                                "비밀번호 확인 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/signup/index.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 54
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/auth/signup/index.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            placeholder: "비밀번호를 한번 더 입력해 주세요.",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.passwordConfirm ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ""}`,
                                            value: passwordConfirm,
                                            onChange: (event)=>handlePasswordConfirmChange(event.target.value),
                                            "aria-invalid": errors.passwordConfirm,
                                            "aria-describedby": hasErrors ? "signup-error" : undefined
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/auth/signup/index.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/auth/signup/index.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                hasErrors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "signup-error",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    role: "alert",
                                    children: errorMessage
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/signup/index.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton,
                                    disabled: loading,
                                    children: loading ? "가입 중..." : "회원가입"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/signup/index.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/signup/index.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loginPrompt,
                            children: [
                                "이미 계정이 있으신가요? ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    children: "로그인"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/signup/index.tsx",
                                    lineNumber: 231,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/signup/index.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/signup/index.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/auth/signup/index.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageSide,
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/img/login/Rectangle%203109.png",
                    alt: "",
                    fill: true,
                    priority: true,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$signup$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/signup/index.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/auth/signup/index.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/auth/signup/index.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/auth/signup/styles.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "errorMessage": "styles-module__Is7vyq__errorMessage",
  "field": "styles-module__Is7vyq__field",
  "form": "styles-module__Is7vyq__form",
  "formInner": "styles-module__Is7vyq__formInner",
  "formSide": "styles-module__Is7vyq__formSide",
  "image": "styles-module__Is7vyq__image",
  "imageSide": "styles-module__Is7vyq__imageSide",
  "input": "styles-module__Is7vyq__input",
  "inputError": "styles-module__Is7vyq__inputError",
  "label": "styles-module__Is7vyq__label",
  "loginPrompt": "styles-module__Is7vyq__loginPrompt",
  "logo": "styles-module__Is7vyq__logo",
  "submitButton": "styles-module__Is7vyq__submitButton",
  "subtitle": "styles-module__Is7vyq__subtitle",
  "title": "styles-module__Is7vyq__title",
  "wrap": "styles-module__Is7vyq__wrap",
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

//# sourceMappingURL=src_0f6f5r5._.js.map