module.exports=[47236,37661,a=>{"use strict";var b=a.i(60271),c=a.i(72131),d=a.i(52535),e=a.i(61985),f=a.i(33851),g=a.i(83955),h=a.i(64848);let i=Symbol.for("apollo.skipToken"),j=Symbol.for("apollo.hook.wrappers");var k=a.i(38979),l=a.i(10830),m=a.i(1534),n=a.i(44016),o=a.i(47613),p=a.i(20594);let q=!1,r=c.useSyncExternalStore,s="ReactNative"==(0,o.maybe)(()=>navigator.product),t=(0,o.maybe)(()=>navigator.userAgent.indexOf("jsdom")>=0)||!1,u=(n.canUseDOM||s)&&!t,v=r||((a,b,d)=>{let e=b();m.__DEV__&&!q&&e!==b()&&(q=!0,p.invariant.error(34));let[{inst:f},g]=c.useState({inst:{value:e,getSnapshot:b}});return u?c.useLayoutEffect(()=>{Object.assign(f,{value:e,getSnapshot:b}),w(f)&&g({inst:f})},[a,e,b]):Object.assign(f,{value:e,getSnapshot:b}),c.useEffect(()=>(w(f)&&g({inst:f}),a(function(){w(f)&&g({inst:f})})),[a]),e});function w({value:a,getSnapshot:b}){try{return a!==b()}catch{return!0}}let x=Symbol(),y=function(a,...[b]){return(function(a,b,d){let e=[d.queryManager,a.startsWith("use")?c.useContext((0,k.getApolloContext)()):void 0],f=b;for(let b of e){let c=b?.[j]?.[a];c&&(f=c(f))}return f})("useQuery",z,(0,l.useApolloClient)("object"==typeof b?b.client:void 0))(a,b)};function z(a,e={}){var f,j,k,m,n,o,p,q,r,s;let t,u,w=(0,l.useApolloClient)("object"==typeof e?e.client:void 0),{ssr:B}="object"==typeof e?e:{},C=(f=a,j=e,k=w.defaultOptions.watchQuery,m=()=>{if(j===i){let a={...(0,g.mergeOptions)(k,{query:f,fetchPolicy:"standby"}),[h.variablesUnknownSymbol]:!0};return a[A]=!0,a}let a=(0,g.mergeOptions)(k,{...j,query:f});return j.skip&&(a.initialFetchPolicy=j.initialFetchPolicy||j.fetchPolicy,a.fetchPolicy="standby"),a},n=[f,j,k],(t=c.useRef(void 0)).current&&(0,b.equal)(t.current.deps,n)||(t.current={value:m(),deps:n}),t.current.value);function D(b){let c=w.watchQuery(C);return{client:w,query:a,observable:c,resultData:{current:c.getCurrentResult(),previousData:b?.resultData.current.data,variables:c.variables}}}let[E,F]=c.useState(D);(w!==E.client||a!==E.query)&&F(E=D(E));let{observable:G,resultData:H}=E;o=C,p=G,o.fetchPolicy||(o.fetchPolicy=p.options.initialFetchPolicy),function(a,c,d){if(c[x]&&!(0,b.equal)(c[x],d)){var e,f;c[x][A]&&!d.initialFetchPolicy&&(d.initialFetchPolicy=d.fetchPolicy),(e=c[x],f=d,e.query===f.query&&(0,b.equal)(e.variables,f.variables)&&(e.fetchPolicy===f.fetchPolicy||"standby"!==f.fetchPolicy&&"standby"!==e.fetchPolicy))?c.applyOptions(d):c.reobserve(d);let g=c.getCurrentResult();(0,b.equal)(g.data,a.current.data)||(a.previousData=a.current.data||a.previousData),a.current=g,a.variables=c.variables}c[x]=d}(H,G,C);let I=(q=G,r=H,s=B,u=q.options.fetchPolicy,v(c.useCallback(a=>{let c=q.pipe((0,d.observeOn)(d.asapScheduler)).subscribe(c=>{let d=r.current;(0,b.equal)(d,c)&&(0,b.equal)(r.variables,q.variables)||(r.variables=q.variables,d.data&&!(0,b.equal)(d.data,c.data)&&(r.previousData=d.data),r.current=c,a())});return()=>{setTimeout(()=>c.unsubscribe())}},[q,r]),()=>r.current,()=>"standby"!==u&&!1===s||"no-cache"===u?y.ssrDisabledResult:r.current)),J=c.useMemo(()=>({refetch:G.refetch.bind(G),fetchMore:G.fetchMore.bind(G),updateQuery:G.updateQuery.bind(G),startPolling:G.startPolling.bind(G),stopPolling:G.stopPolling.bind(G),subscribeToMore:G.subscribeToMore.bind(G)}),[G]),K=H.previousData;return c.useMemo(()=>{let{partial:a,...b}=I;return{...b,client:w,observable:G,variables:G.variables,previousData:K,...J}},[I,w,G,K,J])}let A=Symbol();y.ssrDisabledResult=(0,f.maybeDeepFreeze)({loading:!0,data:void 0,dataState:"empty",error:void 0,networkStatus:e.NetworkStatus.loading,partial:!0}),a.s(["useQuery",0,y],47236);var B=a.i(67858);B.gql`
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
`,B.gql`
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
`;let C=B.gql`
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
`;a.s(["FETCH_USER_LOGGED_IN",0,C],37661)},28014,a=>{a.v({avatarGrid:"styles-module__L7HL_W__avatarGrid",avatarOption:"styles-module__L7HL_W__avatarOption",avatarOptionActive:"styles-module__L7HL_W__avatarOptionActive",header:"styles-module__L7HL_W__header",inner:"styles-module__L7HL_W__inner",leftGroup:"styles-module__L7HL_W__leftGroup",loginButton:"styles-module__L7HL_W__loginButton",loginIcon:"styles-module__L7HL_W__loginIcon",logo:"styles-module__L7HL_W__logo",logoutButton:"styles-module__L7HL_W__logoutButton",nav:"styles-module__L7HL_W__nav",navItem:"styles-module__L7HL_W__navItem",navItemActive:"styles-module__L7HL_W__navItemActive",profileAvatar:"styles-module__L7HL_W__profileAvatar",profileDropdown:"styles-module__L7HL_W__profileDropdown",profileLink:"styles-module__L7HL_W__profileLink",profileMenu:"styles-module__L7HL_W__profileMenu",profileMenuTitle:"styles-module__L7HL_W__profileMenuTitle",profileTrigger:"styles-module__L7HL_W__profileTrigger"})},16968,a=>{"use strict";var b=a.i(87924),c=a.i(71987),d=a.i(38246),e=a.i(50944),f=a.i(72131),g=a.i(18236),h=a.i(47236),i=a.i(77322),j=a.i(37661),k=a.i(28014);let l=[{label:"트립토크",href:"/trip-talk"},{label:"숙박권 구매",href:"/travelproducts"},{label:"마이 페이지",href:"/my-page"}],m=["/img/profile/img.png","/img/profile/img-1.png","/img/profile/img-2.png","/img/profile/img-3.png","/img/profile/img-4.png","/img/profile/img-5.png","/img/profile/img-6.png","/img/profile/img-7.png","/img/profile/img-8.png"];a.s(["default",0,function(){let a=(0,e.usePathname)();(0,e.useRouter)();let[n,o]=(0,f.useState)(!1),[p,q]=(0,f.useState)(!1),{data:r,refetch:s}=(0,h.useQuery)(j.FETCH_USER_LOGGED_IN,{skip:(p,!0)}),[t,{loading:u}]=(0,g.useMutation)(i.UPDATE_USER_PICTURE);return m.includes(r?.fetchUserLoggedIn.picture??"")&&r?.fetchUserLoggedIn.picture,(0,b.jsx)("header",{className:k.default.header,children:(0,b.jsxs)("div",{className:k.default.inner,children:[(0,b.jsxs)("div",{className:k.default.leftGroup,children:[(0,b.jsx)(d.default,{href:"/trip-talk",className:k.default.logo,children:(0,b.jsx)(c.default,{src:"/icon/logo/black_size_m.svg",alt:"TRIP TRIP",width:52,height:32,priority:!0})}),(0,b.jsx)("nav",{className:k.default.nav,children:l.map(c=>{let e=a?.startsWith(c.href);return(0,b.jsx)(d.default,{href:c.href,className:`${k.default.navItem} ${e?k.default.navItemActive:""}`,children:c.label},c.href)})})]}),(0,b.jsxs)(d.default,{href:"/login",className:k.default.loginButton,children:["로그인",(0,b.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,className:k.default.loginIcon,children:(0,b.jsx)("path",{d:"M9 6l6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})}])}];

//# sourceMappingURL=_1v0hvfq._.js.map