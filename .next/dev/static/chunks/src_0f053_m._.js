(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/commons/header/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/mutations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/queries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/commons/header/styles.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const NAV_ITEMS = [
    {
        label: "트립토크",
        href: "/trip-talk"
    },
    {
        label: "숙박권 구매",
        href: "/travelproducts"
    },
    {
        label: "마이 페이지",
        href: "/my-page"
    }
];
const DEFAULT_AVATAR = "/img/profile/img.png";
const AVATARS = [
    DEFAULT_AVATAR,
    "/img/profile/img-1.png",
    "/img/profile/img-2.png",
    "/img/profile/img-3.png",
    "/img/profile/img-4.png",
    "/img/profile/img-5.png",
    "/img/profile/img-6.png",
    "/img/profile/img-7.png",
    "/img/profile/img-8.png"
];
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoggedOut, setIsLoggedOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isLoggedIn = !isLoggedOut && ("TURBOPACK compile-time value", "object") !== "undefined" && Boolean(localStorage.getItem("accessToken"));
    const { data, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FETCH_USER_LOGGED_IN"], {
        skip: !isLoggedIn
    });
    const [updateUserPicture, { loading: isSavingPicture }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UPDATE_USER_PICTURE"]);
    const selectedAvatar = AVATARS.includes(data?.fetchUserLoggedIn.picture ?? "") ? data?.fetchUserLoggedIn.picture ?? DEFAULT_AVATAR : DEFAULT_AVATAR;
    const handleAvatarSelect = async (picture)=>{
        try {
            await updateUserPicture({
                variables: {
                    updateUserInput: {
                        picture
                    }
                }
            });
            await refetch();
            setIsMenuOpen(false);
        } catch  {
        // 프로필 저장에 실패해도 현재 메뉴를 유지해 다시 선택할 수 있도록 합니다.
        }
    };
    const handleLogout = ()=>{
        localStorage.removeItem("accessToken");
        setIsLoggedOut(true);
        setIsMenuOpen(false);
        router.replace("/trip-talk");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/trip-talk",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/icon/logo/black_size_m.svg",
                                alt: "TRIP TRIP",
                                width: 52,
                                height: 32,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/commons/header/index.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/commons/header/index.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                            children: NAV_ITEMS.map((item)=>{
                                const isActive = pathname?.startsWith(item.href);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemActive : ""}`,
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/src/components/commons/header/index.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/commons/header/index.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/commons/header/index.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                isLoggedIn && data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileMenu,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileTrigger,
                            onClick: ()=>setIsMenuOpen((current)=>!current),
                            "aria-expanded": isMenuOpen,
                            "aria-haspopup": "menu",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: selectedAvatar,
                                    alt: `${data.fetchUserLoggedIn.name} 프로필`,
                                    width: 32,
                                    height: 32,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileAvatar
                                }, void 0, false, {
                                    fileName: "[project]/src/components/commons/header/index.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M7 10l5 5 5-5",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/commons/header/index.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/commons/header/index.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/commons/header/index.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileDropdown,
                            role: "menu",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileMenuTitle,
                                    children: "프로필 이미지"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/commons/header/index.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarGrid,
                                    children: AVATARS.map((avatar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarOption} ${selectedAvatar === avatar ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarOptionActive : ""}`,
                                            onClick: ()=>handleAvatarSelect(avatar),
                                            disabled: isSavingPicture,
                                            "aria-label": "프로필 이미지 선택",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: avatar,
                                                alt: "",
                                                width: 36,
                                                height: 36
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/commons/header/index.tsx",
                                                lineNumber: 148,
                                                columnNumber: 23
                                            }, this)
                                        }, avatar, false, {
                                            fileName: "[project]/src/components/commons/header/index.tsx",
                                            lineNumber: 140,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/commons/header/index.tsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/my-page",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileLink,
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: "마이페이지"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/commons/header/index.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutButton,
                                    onClick: handleLogout,
                                    children: "로그아웃"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/commons/header/index.tsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/commons/header/index.tsx",
                            lineNumber: 136,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/commons/header/index.tsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginButton,
                    children: [
                        "로그인",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            "aria-hidden": true,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commons$2f$header$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 6l6 6-6 6",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/commons/header/index.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/commons/header/index.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/commons/header/index.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/commons/header/index.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/commons/header/index.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(Header, "Rz4oShCPM/ZDO5zFu8V2jVrMdnE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/commons/header/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatarGrid": "styles-module__L7HL_W__avatarGrid",
  "avatarOption": "styles-module__L7HL_W__avatarOption",
  "avatarOptionActive": "styles-module__L7HL_W__avatarOptionActive",
  "header": "styles-module__L7HL_W__header",
  "inner": "styles-module__L7HL_W__inner",
  "leftGroup": "styles-module__L7HL_W__leftGroup",
  "loginButton": "styles-module__L7HL_W__loginButton",
  "loginIcon": "styles-module__L7HL_W__loginIcon",
  "logo": "styles-module__L7HL_W__logo",
  "logoutButton": "styles-module__L7HL_W__logoutButton",
  "nav": "styles-module__L7HL_W__nav",
  "navItem": "styles-module__L7HL_W__navItem",
  "navItemActive": "styles-module__L7HL_W__navItemActive",
  "profileAvatar": "styles-module__L7HL_W__profileAvatar",
  "profileDropdown": "styles-module__L7HL_W__profileDropdown",
  "profileLink": "styles-module__L7HL_W__profileLink",
  "profileMenu": "styles-module__L7HL_W__profileMenu",
  "profileMenuTitle": "styles-module__L7HL_W__profileMenuTitle",
  "profileTrigger": "styles-module__L7HL_W__profileTrigger",
});
}),
"[project]/src/components/travelproducts/detail/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StayDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/travelproducts/detail/styles.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function formatToday() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return `${y}.${m}.${d}`;
}
function StayDetail({ title, subtitle, tags, photoCount, images, price, purchaseNotes, seller, description, address, mapImage }) {
    _s();
    const [inquiries, setInquiries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inquiryText, setInquiryText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mainImage, setMainImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(images[0]);
    const canSubmit = Boolean(inquiryText.trim()) && !isSubmitting;
    const handleSubmitInquiry = (event)=>{
        event.preventDefault();
        if (!canSubmit) return;
        setIsSubmitting(true);
        const newInquiry = {
            id: Date.now(),
            content: inquiryText.trim(),
            date: formatToday()
        };
        setInquiries((prev)=>[
                newInquiry,
                ...prev
            ]);
        setInquiryText("");
        setIsSubmitting(false);
    };
    const handleDeleteInquiry = (id)=>{
        setInquiries((prev)=>prev.filter((i)=>i.id !== id));
    };
    const thumbnails = images.filter((image)=>image !== mainImage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleBlock,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tags,
                                        children: tags.map((tag)=>`#${tag}`).join(" ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleIcons,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconButton,
                                        "aria-label": "삭제",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            "aria-hidden": true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 7",
                                                stroke: "#919191",
                                                strokeWidth: "1.6",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconButton,
                                        "aria-label": "링크 공유",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            "aria-hidden": true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M9 12h6M8 17H6a5 5 0 0 1 0-10h2m8 0h2a5 5 0 0 1 0 10h-2",
                                                stroke: "#919191",
                                                strokeWidth: "1.6",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconButton,
                                        "aria-label": "위치",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            "aria-hidden": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 21s-6.7-4.35-6.7-10A6.7 6.7 0 0 1 12 4a6.7 6.7 0 0 1 6.7 7c0 5.65-6.7 10-6.7 10z",
                                                    stroke: "#919191",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "11",
                                                    r: "2.4",
                                                    stroke: "#919191",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].photoBadge,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                "aria-hidden": true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "3",
                                                        y: "6",
                                                        width: "18",
                                                        height: "14",
                                                        rx: "2",
                                                        stroke: "#777777",
                                                        strokeWidth: "1.6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "13",
                                                        r: "3.2",
                                                        stroke: "#777777",
                                                        strokeWidth: "1.6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            photoCount
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topRow,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gallery,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainImageWrap,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: mainImage,
                                        alt: title,
                                        fill: true,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainImage
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbGrid,
                                    children: thumbnails.slice(0, 3).map((thumb, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbWrap,
                                            onClick: ()=>setMainImage(thumb),
                                            "aria-label": `${title} 이미지 ${index + 2} 크게 보기`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: thumb,
                                                alt: `${title} 이미지 ${index + 2}`,
                                                fill: true,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbImage
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, this)
                                        }, thumb, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sideColumn,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                            children: price
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].purchaseNotes,
                                            children: purchaseNotes.map((note, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: note
                                                }, index, false, {
                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].purchaseButton,
                                            children: "구매하기"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sellerCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sellerLabel,
                                            children: "판매자"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sellerInfo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: seller.avatar,
                                                    alt: seller.name,
                                                    width: 24,
                                                    height: 24,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sellerAvatar
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sellerName,
                                                    children: seller.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentColumn,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeading,
                            children: "상세 설명"
                        }, void 0, false, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: description.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paragraph,
                                    children: paragraph
                                }, index, false, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentColumn,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeading,
                            children: "상세 위치"
                        }, void 0, false, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapWrap,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: mapImage,
                                alt: address,
                                fill: true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapImage
                            }, void 0, false, {
                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquirySection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    "aria-hidden": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "3",
                                            y: "5",
                                            width: "18",
                                            height: "14",
                                            rx: "2",
                                            stroke: "#1c1c1c",
                                            strokeWidth: "1.6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M8 10h8M8 14h5",
                                            stroke: "#1c1c1c",
                                            strokeWidth: "1.6",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryTitle,
                                    children: "문의하기"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryForm,
                            onSubmit: handleSubmitInquiry,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaWrap,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            placeholder: "문의사항을 입력해 주세요.",
                                            maxLength: 100,
                                            value: inquiryText,
                                            onChange: (event)=>setInquiryText(event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].charCount,
                                            children: [
                                                inquiryText.length,
                                                "/100"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitRow,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                        disabled: !canSubmit,
                                        children: "문의 하기"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryList,
                            children: inquiries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                                children: "등록된 문의사항이 없습니다."
                            }, void 0, false, {
                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                lineNumber: 327,
                                columnNumber: 15
                            }, this) : inquiries.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryItemHeader,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryItemDate,
                                                    children: item.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryDeleteButton,
                                                    onClick: ()=>handleDeleteInquiry(item.id),
                                                    children: "삭제"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 331,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryItemContent,
                                            children: item.content
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 341,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 330,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(StayDetail, "kM/9TTuDXxB+oyHaOmk0MtqLElM=");
_c = StayDetail;
var _c;
__turbopack_context__.k.register(_c, "StayDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/travelproducts/detail/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "charCount": "styles-module___eyqlq__charCount",
  "container": "styles-module___eyqlq__container",
  "contentColumn": "styles-module___eyqlq__contentColumn",
  "description": "styles-module___eyqlq__description",
  "emptyState": "styles-module___eyqlq__emptyState",
  "gallery": "styles-module___eyqlq__gallery",
  "iconButton": "styles-module___eyqlq__iconButton",
  "inquiryDeleteButton": "styles-module___eyqlq__inquiryDeleteButton",
  "inquiryForm": "styles-module___eyqlq__inquiryForm",
  "inquiryHeader": "styles-module___eyqlq__inquiryHeader",
  "inquiryItem": "styles-module___eyqlq__inquiryItem",
  "inquiryItemContent": "styles-module___eyqlq__inquiryItemContent",
  "inquiryItemDate": "styles-module___eyqlq__inquiryItemDate",
  "inquiryItemHeader": "styles-module___eyqlq__inquiryItemHeader",
  "inquiryList": "styles-module___eyqlq__inquiryList",
  "inquirySection": "styles-module___eyqlq__inquirySection",
  "inquiryTitle": "styles-module___eyqlq__inquiryTitle",
  "mainImage": "styles-module___eyqlq__mainImage",
  "mainImageWrap": "styles-module___eyqlq__mainImageWrap",
  "mapImage": "styles-module___eyqlq__mapImage",
  "mapWrap": "styles-module___eyqlq__mapWrap",
  "paragraph": "styles-module___eyqlq__paragraph",
  "photoBadge": "styles-module___eyqlq__photoBadge",
  "price": "styles-module___eyqlq__price",
  "priceCard": "styles-module___eyqlq__priceCard",
  "purchaseButton": "styles-module___eyqlq__purchaseButton",
  "purchaseNotes": "styles-module___eyqlq__purchaseNotes",
  "section": "styles-module___eyqlq__section",
  "sectionHeading": "styles-module___eyqlq__sectionHeading",
  "sellerAvatar": "styles-module___eyqlq__sellerAvatar",
  "sellerCard": "styles-module___eyqlq__sellerCard",
  "sellerInfo": "styles-module___eyqlq__sellerInfo",
  "sellerLabel": "styles-module___eyqlq__sellerLabel",
  "sellerName": "styles-module___eyqlq__sellerName",
  "sideColumn": "styles-module___eyqlq__sideColumn",
  "submitButton": "styles-module___eyqlq__submitButton",
  "submitRow": "styles-module___eyqlq__submitRow",
  "subtitle": "styles-module___eyqlq__subtitle",
  "tags": "styles-module___eyqlq__tags",
  "textareaWrap": "styles-module___eyqlq__textareaWrap",
  "thumbGrid": "styles-module___eyqlq__thumbGrid",
  "thumbImage": "styles-module___eyqlq__thumbImage",
  "thumbWrap": "styles-module___eyqlq__thumbWrap",
  "title": "styles-module___eyqlq__title",
  "titleBlock": "styles-module___eyqlq__titleBlock",
  "titleIcons": "styles-module___eyqlq__titleIcons",
  "titleRow": "styles-module___eyqlq__titleRow",
  "topRow": "styles-module___eyqlq__topRow",
});
}),
"[project]/src/graphql/mutations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CREATE_USER",
    ()=>CREATE_USER,
    "LOGIN_USER",
    ()=>LOGIN_USER,
    "UPDATE_USER_PICTURE",
    ()=>UPDATE_USER_PICTURE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/graphql-tag/lib/index.js [app-client] (ecmascript)");
;
const LOGIN_USER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
const CREATE_USER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;
const UPDATE_USER_PICTURE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation UpdateUserPicture($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      picture
    }
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/graphql/queries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FETCH_BOARD",
    ()=>FETCH_BOARD,
    "FETCH_BOARDS",
    ()=>FETCH_BOARDS,
    "FETCH_USER_LOGGED_IN",
    ()=>FETCH_USER_LOGGED_IN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/graphql-tag/lib/index.js [app-client] (ecmascript)");
;
const FETCH_BOARDS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id          # 게시글 고유 ID
      writer       # 작성자 이름
      title        # 게시글 제목
      contents     # 게시글 내용
      likeCount    # 좋아요 개수
      images       # 첨부된 이미지 목록
      createdAt    # 작성일시
    }
  }
`;
const FETCH_BOARD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id          # 게시글 고유 ID
      writer       # 작성자 이름
      title        # 게시글 제목
      contents     # 게시글 내용
      likeCount    # 좋아요 개수
      images       # 첨부된 이미지 목록
      createdAt    # 작성일시
    }
  }
`;
const FETCH_USER_LOGGED_IN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id          # 유저 고유 ID
      email        # 유저 이메일
      name         # 유저 이름
      picture      # 유저 프로필 사진
      userPoint {
        amount     # 보유 포인트 잔액
      }
    }
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0f053_m._.js.map