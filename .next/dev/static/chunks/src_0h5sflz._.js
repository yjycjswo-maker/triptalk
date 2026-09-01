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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$open$2d$street$2d$map$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/open-street-map/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/travelproducts/detail/styles.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
function addReplyAtPath(replies, path, newReply) {
    const [replyId, ...remainingPath] = path;
    return replies.map((reply)=>reply.id !== replyId ? reply : remainingPath.length === 0 ? {
            ...reply,
            replies: [
                ...reply.replies,
                newReply
            ]
        } : {
            ...reply,
            replies: addReplyAtPath(reply.replies, remainingPath, newReply)
        });
}
function updateReplyAtPath(replies, path, content) {
    const [replyId, ...remainingPath] = path;
    return replies.map((reply)=>reply.id !== replyId ? reply : remainingPath.length === 0 ? {
            ...reply,
            content
        } : {
            ...reply,
            replies: updateReplyAtPath(reply.replies, remainingPath, content)
        });
}
function deleteReplyAtPath(replies, path) {
    const [replyId, ...remainingPath] = path;
    if (remainingPath.length === 0) {
        return replies.filter((reply)=>reply.id !== replyId);
    }
    return replies.map((reply)=>reply.id === replyId ? {
            ...reply,
            replies: deleteReplyAtPath(reply.replies, remainingPath)
        } : reply);
}
function ReplyEditor({ label, value, onChange, onCancel, onSubmit }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyForm,
        onSubmit: onSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaWrap,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        "aria-label": label,
                        placeholder: "답변할 내용을 입력해 주세요.",
                        maxLength: 100,
                        value: value,
                        onChange: (event)=>onChange(event.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].charCount,
                        children: [
                            value.length,
                            "/100"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editActionRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                        onClick: onCancel,
                        children: "취소"
                    }, void 0, false, {
                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                        disabled: !value.trim(),
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_c = ReplyEditor;
function ReplyList({ replies, inquiryId, parentPath = [], nested = false, replyingTarget, replyText, editingTarget, editingText, onStartReply, onChangeReplyText, onCancelReply, onSubmitReply, onStartEdit, onChangeEditText, onCancelEdit, onSubmitEdit, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: nested ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nestedReplyList : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyList,
        children: replies.map((reply)=>{
            const replyPath = [
                ...parentPath,
                reply.id
            ];
            const isEditing = editingTarget?.inquiryId === inquiryId && editingTarget.replyPath.join(",") === replyPath.join(",");
            const isReplying = replyingTarget?.inquiryId === inquiryId && replyingTarget.replyPath.join(",") === replyPath.join(",");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyItem,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyArrow,
                        "aria-hidden": true,
                        children: "↳"
                    }, void 0, false, {
                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                        lineNumber: 189,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReplyEditor, {
                                label: "수정 하기",
                                value: editingText,
                                onChange: onChangeEditText,
                                onCancel: onCancelEdit,
                                onSubmit: onSubmitEdit
                            }, void 0, false, {
                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                lineNumber: 192,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyAuthor,
                                        children: "답변"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 201,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyContent,
                                        children: reply.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 202,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryItemDate,
                                        children: reply.date
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 203,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyActions,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryEditButton,
                                                onClick: ()=>onStartEdit(inquiryId, replyPath, reply.content),
                                                children: "수정"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 205,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryDeleteButton,
                                                onClick: ()=>onDelete(inquiryId, replyPath),
                                                children: "삭제"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 210,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 204,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyButton,
                                        onClick: ()=>onStartReply(inquiryId, replyPath),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/icon/shape/outline/reply.svg",
                                                alt: "",
                                                width: 18,
                                                height: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 221,
                                                columnNumber: 21
                                            }, this),
                                            "답변 하기"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 216,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                lineNumber: 200,
                                columnNumber: 17
                            }, this),
                            reply.replies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReplyList, {
                                replies: reply.replies,
                                inquiryId,
                                parentPath: replyPath,
                                nested: true,
                                replyingTarget,
                                replyText,
                                editingTarget,
                                editingText,
                                onStartReply,
                                onChangeReplyText,
                                onCancelReply,
                                onSubmitReply,
                                onStartEdit,
                                onChangeEditText,
                                onCancelEdit,
                                onSubmitEdit,
                                onDelete
                            }, void 0, false, {
                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                lineNumber: 228,
                                columnNumber: 17
                            }, this),
                            isReplying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReplyEditor, {
                                label: "답변 하기",
                                value: replyText,
                                onChange: onChangeReplyText,
                                onCancel: onCancelReply,
                                onSubmit: onSubmitReply
                            }, void 0, false, {
                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                lineNumber: 252,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                        lineNumber: 190,
                        columnNumber: 13
                    }, this)
                ]
            }, reply.id, true, {
                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                lineNumber: 188,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_c1 = ReplyList;
function StayDetail({ title, subtitle, tags, photoCount, images, price, purchaseNotes, seller, description, address, coordinates }) {
    _s();
    const [inquiries, setInquiries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inquiryText, setInquiryText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingInquiryId, setEditingInquiryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingInquiryText, setEditingInquiryText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [replyingTarget, setReplyingTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingReplyTarget, setEditingReplyTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingReplyText, setEditingReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedImageIndex, setSelectedImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [thumbnailStartIndex, setThumbnailStartIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const canSubmit = Boolean(inquiryText.trim()) && !isSubmitting;
    const handleSubmitInquiry = (event)=>{
        event.preventDefault();
        if (!canSubmit) return;
        setIsSubmitting(true);
        const newInquiry = {
            id: Date.now(),
            content: inquiryText.trim(),
            date: formatToday(),
            replies: []
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
    const handleStartEditInquiry = (inquiry)=>{
        setEditingInquiryId(inquiry.id);
        setEditingInquiryText(inquiry.content);
    };
    const handleCancelEditInquiry = ()=>{
        setEditingInquiryId(null);
        setEditingInquiryText("");
    };
    const handleSaveEditInquiry = (event, id)=>{
        event.preventDefault();
        const content = editingInquiryText.trim();
        if (!content) return;
        setInquiries((prev)=>prev.map((inquiry)=>inquiry.id === id ? {
                    ...inquiry,
                    content
                } : inquiry));
        handleCancelEditInquiry();
    };
    const handleStartReply = (inquiryId, replyPath = [])=>{
        setReplyingTarget({
            inquiryId,
            replyPath: Array.isArray(replyPath) ? replyPath : [
                replyPath
            ]
        });
        setReplyText("");
    };
    const handleCancelReply = ()=>{
        setReplyingTarget(null);
        setReplyText("");
    };
    const handleSubmitReply = (event)=>{
        event.preventDefault();
        const content = replyText.trim();
        if (!content || !replyingTarget) return;
        const reply = {
            id: Date.now(),
            content,
            date: formatToday(),
            replies: []
        };
        setInquiries((prev)=>prev.map((inquiry)=>inquiry.id !== replyingTarget.inquiryId ? inquiry : replyingTarget.replyPath.length === 0 ? {
                    ...inquiry,
                    replies: [
                        ...inquiry.replies,
                        reply
                    ]
                } : {
                    ...inquiry,
                    replies: addReplyAtPath(inquiry.replies, replyingTarget.replyPath, reply)
                }));
        handleCancelReply();
    };
    const handleStartEditReply = (inquiryId, replyPath, content, nestedReplyId)=>{
        const normalizedPath = Array.isArray(replyPath) ? replyPath : nestedReplyId === undefined ? [
            replyPath
        ] : [
            replyPath,
            nestedReplyId
        ];
        setEditingReplyTarget({
            inquiryId,
            replyPath: normalizedPath
        });
        setEditingReplyText(content);
    };
    const handleCancelEditReply = ()=>{
        setEditingReplyTarget(null);
        setEditingReplyText("");
    };
    const handleSaveEditReply = (event)=>{
        event.preventDefault();
        const content = editingReplyText.trim();
        if (!content || !editingReplyTarget) return;
        setInquiries((prev)=>prev.map((inquiry)=>{
                if (inquiry.id !== editingReplyTarget.inquiryId) return inquiry;
                return {
                    ...inquiry,
                    replies: updateReplyAtPath(inquiry.replies, editingReplyTarget.replyPath, content)
                };
            }));
        handleCancelEditReply();
    };
    const handleDeleteReply = (inquiryId, replyPath, nestedReplyId)=>{
        const normalizedPath = Array.isArray(replyPath) ? replyPath : nestedReplyId === undefined ? [
            replyPath
        ] : [
            replyPath,
            nestedReplyId
        ];
        setInquiries((prev)=>prev.map((inquiry)=>{
                if (inquiry.id !== inquiryId) return inquiry;
                return {
                    ...inquiry,
                    replies: deleteReplyAtPath(inquiry.replies, normalizedPath)
                };
            }));
    };
    const mainImage = images[selectedImageIndex];
    const thumbnails = Array.from({
        length: images.length + 1
    }, (_, index)=>images[(thumbnailStartIndex + index) % images.length]);
    const handleThumbnailWheel = (event)=>{
        event.preventDefault();
        if (event.deltaY === 0) return;
        setThumbnailStartIndex((currentIndex)=>{
            const direction = event.deltaY > 0 ? 1 : -1;
            return (currentIndex + direction + images.length) % images.length;
        });
    };
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
                                        lineNumber: 474,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 475,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tags,
                                        children: tags.map((tag)=>`#${tag}`).join(" ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                lineNumber: 473,
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
                                                lineNumber: 494,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 487,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 482,
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
                                                lineNumber: 515,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 508,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 503,
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
                                                    lineNumber: 535,
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
                                                    lineNumber: 540,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 528,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 523,
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
                                                        lineNumber: 557,
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
                                                        lineNumber: 566,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 550,
                                                columnNumber: 17
                                            }, this),
                                            photoCount
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 549,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                lineNumber: 481,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                        lineNumber: 472,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                    lineNumber: 471,
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
                                        lineNumber: 584,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 583,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbGrid,
                                    onWheel: handleThumbnailWheel,
                                    "aria-label": "숙소 사진 목록",
                                    children: thumbnails.map((thumb, visibleIndex)=>{
                                        const imageIndex = images.indexOf(thumb);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbWrap} ${selectedImageIndex === imageIndex ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbWrapActive : ""}`,
                                            onClick: ()=>setSelectedImageIndex(imageIndex),
                                            "aria-label": `${title} 이미지 ${imageIndex + 1} 크게 보기`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: thumb,
                                                alt: `${title} 이미지 ${imageIndex + 1}`,
                                                fill: true,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbImage
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 607,
                                                columnNumber: 19
                                            }, this)
                                        }, `${thumb}-${visibleIndex}`, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 600,
                                            columnNumber: 17
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 591,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 582,
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
                                            lineNumber: 621,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].purchaseNotes,
                                            children: purchaseNotes.map((note, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: note
                                                }, index, false, {
                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 622,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].purchaseButton,
                                            children: "구매하기"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 627,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 620,
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
                                            lineNumber: 633,
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
                                                    lineNumber: 635,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sellerName,
                                                    children: seller.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 634,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 632,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 619,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                    lineNumber: 581,
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
                            lineNumber: 650,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: description.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paragraph,
                                    children: paragraph
                                }, index, false, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 653,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 651,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                    lineNumber: 649,
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
                            lineNumber: 662,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapWrap,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$open$2d$street$2d$map$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                latitude: coordinates.latitude,
                                longitude: coordinates.longitude,
                                title: title,
                                address: address
                            }, void 0, false, {
                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                lineNumber: 664,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 663,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                    lineNumber: 661,
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
                                            lineNumber: 683,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M8 10h8M8 14h5",
                                            stroke: "#1c1c1c",
                                            strokeWidth: "1.6",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                            lineNumber: 692,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 676,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryTitle,
                                    children: "문의하기"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 699,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 675,
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
                                            lineNumber: 704,
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
                                            lineNumber: 710,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 703,
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
                                        lineNumber: 714,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 713,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 702,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryList,
                            children: inquiries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                                children: "등록된 문의사항이 없습니다."
                            }, void 0, false, {
                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                lineNumber: 726,
                                columnNumber: 15
                            }, this) : inquiries.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryItem,
                                    children: editingInquiryId === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryEditForm,
                                        onSubmit: (event)=>handleSaveEditInquiry(event, item.id),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaWrap,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        "aria-label": "문의 내용 수정",
                                                        maxLength: 100,
                                                        value: editingInquiryText,
                                                        onChange: (event)=>setEditingInquiryText(event.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                        lineNumber: 736,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].charCount,
                                                        children: [
                                                            editingInquiryText.length,
                                                            "/100"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                        lineNumber: 742,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 735,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editActionRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                                        onClick: handleCancelEditInquiry,
                                                        children: "취소"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                        lineNumber: 747,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                                        disabled: !editingInquiryText.trim(),
                                                        children: "수정 하기"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                        lineNumber: 754,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 746,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 731,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryItemHeader,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryItemDate,
                                                        children: item.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                        lineNumber: 766,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryActions,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryEditButton,
                                                                onClick: ()=>handleStartEditInquiry(item),
                                                                children: "수정"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                lineNumber: 768,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryDeleteButton,
                                                                onClick: ()=>handleDeleteInquiry(item.id),
                                                                children: "삭제"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                lineNumber: 775,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                        lineNumber: 767,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 765,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryItemContent,
                                                children: item.content
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 784,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyButton,
                                                onClick: ()=>handleStartReply(item.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icon/shape/outline/reply.svg",
                                                        alt: "",
                                                        width: 18,
                                                        height: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 25
                                                    }, this),
                                                    "답변 하기"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 785,
                                                columnNumber: 23
                                            }, this),
                                            item.replies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReplyList, {
                                                replies: item.replies,
                                                inquiryId: item.id,
                                                replyingTarget: replyingTarget,
                                                replyText: replyText,
                                                editingTarget: editingReplyTarget,
                                                editingText: editingReplyText,
                                                onStartReply: handleStartReply,
                                                onChangeReplyText: setReplyText,
                                                onCancelReply: handleCancelReply,
                                                onSubmitReply: handleSubmitReply,
                                                onStartEdit: handleStartEditReply,
                                                onChangeEditText: setEditingReplyText,
                                                onCancelEdit: handleCancelEditReply,
                                                onSubmitEdit: handleSaveEditReply,
                                                onDelete: handleDeleteReply
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 800,
                                                columnNumber: 25
                                            }, this),
                                            replyingTarget?.inquiryId === item.id && replyingTarget.replyPath.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReplyEditor, {
                                                label: "답변 하기",
                                                value: replyText,
                                                onChange: setReplyText,
                                                onCancel: handleCancelReply,
                                                onSubmit: handleSubmitReply
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 821,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legacyReplies,
                                                children: [
                                                    item.replies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyList,
                                                        children: item.replies.map((reply)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyItem,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyArrow,
                                                                        "aria-hidden": true,
                                                                        children: "↳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                        lineNumber: 835,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            editingReplyTarget?.inquiryId === item.id && editingReplyTarget.replyId === reply.id && editingReplyTarget.nestedReplyId === undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyEditForm,
                                                                                onSubmit: handleSaveEditReply,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaWrap,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                                "aria-label": "답변 내용 수정",
                                                                                                maxLength: 100,
                                                                                                value: editingReplyText,
                                                                                                onChange: (event)=>setEditingReplyText(event.target.value)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                lineNumber: 847,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].charCount,
                                                                                                children: [
                                                                                                    editingReplyText.length,
                                                                                                    "/100"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                lineNumber: 855,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                        lineNumber: 846,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editActionRow,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                                                                                onClick: handleCancelEditReply,
                                                                                                children: "취소"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                lineNumber: 860,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "submit",
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                                                                                disabled: !editingReplyText.trim(),
                                                                                                children: "수정 하기"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                lineNumber: 867,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                        lineNumber: 859,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                lineNumber: 842,
                                                                                columnNumber: 35
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyAuthor,
                                                                                        children: "답변"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                        lineNumber: 878,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyContent,
                                                                                        children: reply.content
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                        lineNumber: 879,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryItemDate,
                                                                                        children: reply.date
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                        lineNumber: 880,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyActions,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryEditButton,
                                                                                                onClick: ()=>handleStartEditReply(item.id, reply.id, reply.content),
                                                                                                children: "수정"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                lineNumber: 884,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryDeleteButton,
                                                                                                onClick: ()=>handleDeleteReply(item.id, reply.id),
                                                                                                children: "삭제"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                lineNumber: 897,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                        lineNumber: 883,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyButton,
                                                                                        onClick: ()=>handleStartReply(item.id, reply.id),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                src: "/icon/shape/outline/reply.svg",
                                                                                                alt: "",
                                                                                                width: 18,
                                                                                                height: 18
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                lineNumber: 912,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            "답변 하기"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                        lineNumber: 907,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                lineNumber: 877,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            reply.replies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nestedReplyList,
                                                                                children: reply.replies.map((nestedReply)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyItem,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyArrow,
                                                                                                "aria-hidden": true,
                                                                                                children: "↳"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                lineNumber: 930,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                children: editingReplyTarget?.inquiryId === item.id && editingReplyTarget.replyId === reply.id && editingReplyTarget.nestedReplyId === nestedReply.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyEditForm,
                                                                                                    onSubmit: handleSaveEditReply,
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaWrap,
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                                                    "aria-label": "답변 내용 수정",
                                                                                                                    maxLength: 100,
                                                                                                                    value: editingReplyText,
                                                                                                                    onChange: (event)=>setEditingReplyText(event.target.value)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                                    lineNumber: 943,
                                                                                                                    columnNumber: 49
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].charCount,
                                                                                                                    children: [
                                                                                                                        editingReplyText.length,
                                                                                                                        "/100"
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                                    lineNumber: 951,
                                                                                                                    columnNumber: 49
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                            lineNumber: 942,
                                                                                                            columnNumber: 47
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editActionRow,
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                    type: "button",
                                                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                                                                                                    onClick: handleCancelEditReply,
                                                                                                                    children: "취소"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                                    lineNumber: 956,
                                                                                                                    columnNumber: 49
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                    type: "submit",
                                                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                                                                                                    disabled: !editingReplyText.trim(),
                                                                                                                    children: "수정 하기"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                                    lineNumber: 963,
                                                                                                                    columnNumber: 49
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                            lineNumber: 955,
                                                                                                            columnNumber: 47
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                    lineNumber: 938,
                                                                                                    columnNumber: 45
                                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyAuthor,
                                                                                                            children: "답변"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                            lineNumber: 974,
                                                                                                            columnNumber: 47
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyContent,
                                                                                                            children: nestedReply.content
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                            lineNumber: 975,
                                                                                                            columnNumber: 47
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryItemDate,
                                                                                                            children: nestedReply.date
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                            lineNumber: 978,
                                                                                                            columnNumber: 47
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyActions,
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                    type: "button",
                                                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryEditButton,
                                                                                                                    onClick: ()=>handleStartEditReply(item.id, reply.id, nestedReply.content, nestedReply.id),
                                                                                                                    children: "수정"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                                    lineNumber: 982,
                                                                                                                    columnNumber: 49
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                    type: "button",
                                                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inquiryDeleteButton,
                                                                                                                    onClick: ()=>handleDeleteReply(item.id, reply.id, nestedReply.id),
                                                                                                                    children: "삭제"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                                    lineNumber: 996,
                                                                                                                    columnNumber: 49
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                            lineNumber: 981,
                                                                                                            columnNumber: 47
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                    lineNumber: 973,
                                                                                                    columnNumber: 45
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                lineNumber: 933,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        ]
                                                                                    }, nestedReply.id, true, {
                                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                        lineNumber: 926,
                                                                                        columnNumber: 39
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                lineNumber: 924,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            replyingTarget?.inquiryId === item.id && replyingTarget.parentReplyId === reply.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyForm,
                                                                                onSubmit: handleSubmitReply,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaWrap,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                                "aria-label": "답변에 대한 답변 입력",
                                                                                                placeholder: "답변할 내용을 입력해 주세요.",
                                                                                                maxLength: 100,
                                                                                                value: replyText,
                                                                                                onChange: (event)=>setReplyText(event.target.value)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                lineNumber: 1025,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].charCount,
                                                                                                children: [
                                                                                                    replyText.length,
                                                                                                    "/100"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                lineNumber: 1034,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                        lineNumber: 1024,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editActionRow,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                                                                                onClick: handleCancelReply,
                                                                                                children: "취소"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                lineNumber: 1039,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "submit",
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                                                                                disabled: !replyText.trim(),
                                                                                                children: "답변 하기"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                                lineNumber: 1046,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                        lineNumber: 1038,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                                lineNumber: 1020,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                        lineNumber: 838,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, reply.id, true, {
                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                lineNumber: 834,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                        lineNumber: 832,
                                                        columnNumber: 25
                                                    }, this),
                                                    replyingTarget?.inquiryId === item.id && replyingTarget.parentReplyId === undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyForm,
                                                        onSubmit: handleSubmitReply,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaWrap,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        "aria-label": "답변 내용 입력",
                                                                        placeholder: "답변할 내용을 입력해 주세요.",
                                                                        maxLength: 100,
                                                                        value: replyText,
                                                                        onChange: (event)=>setReplyText(event.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                        lineNumber: 1069,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].charCount,
                                                                        children: [
                                                                            replyText.length,
                                                                            "/100"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                        lineNumber: 1076,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                lineNumber: 1068,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editActionRow,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                                                        onClick: handleCancelReply,
                                                                        children: "취소"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                        lineNumber: 1079,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "submit",
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$travelproducts$2f$detail$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                                                        disabled: !replyText.trim(),
                                                                        children: "답변 하기"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                        lineNumber: 1086,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                                lineNumber: 1078,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                        lineNumber: 1064,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                                lineNumber: 830,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                        lineNumber: 764,
                                        columnNumber: 21
                                    }, this)
                                }, item.id, false, {
                                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                                    lineNumber: 729,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                            lineNumber: 724,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/travelproducts/detail/index.tsx",
                    lineNumber: 674,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/travelproducts/detail/index.tsx",
            lineNumber: 469,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/travelproducts/detail/index.tsx",
        lineNumber: 468,
        columnNumber: 5
    }, this);
}
_s(StayDetail, "wRaTVD5G7zvezoM63sywbqCcFSE=");
_c2 = StayDetail;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ReplyEditor");
__turbopack_context__.k.register(_c1, "ReplyList");
__turbopack_context__.k.register(_c2, "StayDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/travelproducts/detail/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cancelButton": "styles-module___eyqlq__cancelButton",
  "charCount": "styles-module___eyqlq__charCount",
  "container": "styles-module___eyqlq__container",
  "contentColumn": "styles-module___eyqlq__contentColumn",
  "description": "styles-module___eyqlq__description",
  "editActionRow": "styles-module___eyqlq__editActionRow",
  "emptyState": "styles-module___eyqlq__emptyState",
  "gallery": "styles-module___eyqlq__gallery",
  "iconButton": "styles-module___eyqlq__iconButton",
  "inquiryActions": "styles-module___eyqlq__inquiryActions",
  "inquiryDeleteButton": "styles-module___eyqlq__inquiryDeleteButton",
  "inquiryEditButton": "styles-module___eyqlq__inquiryEditButton",
  "inquiryEditForm": "styles-module___eyqlq__inquiryEditForm",
  "inquiryForm": "styles-module___eyqlq__inquiryForm",
  "inquiryHeader": "styles-module___eyqlq__inquiryHeader",
  "inquiryItem": "styles-module___eyqlq__inquiryItem",
  "inquiryItemContent": "styles-module___eyqlq__inquiryItemContent",
  "inquiryItemDate": "styles-module___eyqlq__inquiryItemDate",
  "inquiryItemHeader": "styles-module___eyqlq__inquiryItemHeader",
  "inquiryList": "styles-module___eyqlq__inquiryList",
  "inquirySection": "styles-module___eyqlq__inquirySection",
  "inquiryTitle": "styles-module___eyqlq__inquiryTitle",
  "legacyReplies": "styles-module___eyqlq__legacyReplies",
  "mainImage": "styles-module___eyqlq__mainImage",
  "mainImageWrap": "styles-module___eyqlq__mainImageWrap",
  "mapImage": "styles-module___eyqlq__mapImage",
  "mapWrap": "styles-module___eyqlq__mapWrap",
  "nestedReplyList": "styles-module___eyqlq__nestedReplyList",
  "paragraph": "styles-module___eyqlq__paragraph",
  "photoBadge": "styles-module___eyqlq__photoBadge",
  "price": "styles-module___eyqlq__price",
  "priceCard": "styles-module___eyqlq__priceCard",
  "purchaseButton": "styles-module___eyqlq__purchaseButton",
  "purchaseNotes": "styles-module___eyqlq__purchaseNotes",
  "replyActions": "styles-module___eyqlq__replyActions",
  "replyArrow": "styles-module___eyqlq__replyArrow",
  "replyAuthor": "styles-module___eyqlq__replyAuthor",
  "replyButton": "styles-module___eyqlq__replyButton",
  "replyContent": "styles-module___eyqlq__replyContent",
  "replyEditForm": "styles-module___eyqlq__replyEditForm",
  "replyForm": "styles-module___eyqlq__replyForm",
  "replyItem": "styles-module___eyqlq__replyItem",
  "replyList": "styles-module___eyqlq__replyList",
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
  "thumbWrapActive": "styles-module___eyqlq__thumbWrapActive",
  "title": "styles-module___eyqlq__title",
  "titleBlock": "styles-module___eyqlq__titleBlock",
  "titleIcons": "styles-module___eyqlq__titleIcons",
  "titleRow": "styles-module___eyqlq__titleRow",
  "topRow": "styles-module___eyqlq__topRow",
});
}),
"[project]/src/components/ui/open-street-map/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OpenStreetMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$open$2d$street$2d$map$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/open-street-map/styles.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function OpenStreetMap({ latitude, longitude, title, address }) {
    _s();
    const mapElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OpenStreetMap.useEffect": ()=>{
            let map;
            let isUnmounted = false;
            const createMap = {
                "OpenStreetMap.useEffect.createMap": async ()=>{
                    const L = await __turbopack_context__.A("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)");
                    if (isUnmounted || !mapElement.current) return;
                    map = L.map(mapElement.current, {
                        scrollWheelZoom: true
                    }).setView([
                        latitude,
                        longitude
                    ], 15);
                    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        maxZoom: 19,
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);
                    L.marker([
                        latitude,
                        longitude
                    ], {
                        icon: L.divIcon({
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$open$2d$street$2d$map$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marker,
                            html: "📍",
                            iconSize: [
                                32,
                                32
                            ],
                            iconAnchor: [
                                16,
                                32
                            ]
                        })
                    }).addTo(map).bindPopup(`<strong>${title}</strong><br />${address}`).openPopup();
                }
            }["OpenStreetMap.useEffect.createMap"];
            void createMap();
            return ({
                "OpenStreetMap.useEffect": ()=>{
                    isUnmounted = true;
                    map?.remove();
                }
            })["OpenStreetMap.useEffect"];
        }
    }["OpenStreetMap.useEffect"], [
        address,
        latitude,
        longitude,
        title
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapElement,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$open$2d$street$2d$map$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].map,
        "aria-label": `${address} 지도`
    }, void 0, false, {
        fileName: "[project]/src/components/ui/open-street-map/index.tsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}
_s(OpenStreetMap, "GU7I4N/VGrt6FEpW0knbDew4aDQ=");
_c = OpenStreetMap;
var _c;
__turbopack_context__.k.register(_c, "OpenStreetMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/open-street-map/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "map": "styles-module__7BRZLG__map",
  "marker": "styles-module__7BRZLG__marker",
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

//# sourceMappingURL=src_0h5sflz._.js.map