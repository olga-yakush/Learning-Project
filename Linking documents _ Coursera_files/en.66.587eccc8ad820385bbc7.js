(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"/duU":function(module,exports,e){},"2iEy":function(module,e,t){"use strict";t.d(e,"a",(function(){return O})),t.d(e,"d",(function(){return f})),t.d(e,"c",(function(){return h}));var n=t("lSNA"),i=t.n(n),a=t("J2iB"),r=t.n(a),o=t("AeFk"),c=t("q1tI"),s=t.n(c),d=t("kgYC"),u=t("8Hdl"),l=t("PSZr"),b=t("IXUt"),m=t("d3Ej"),p=t.n(m),g=function getRootStyles(e,t){return Object(o.c)(i()({padding:e.spacing(24,0),borderBottom:"1px solid ".concat(e.palette.gray[300]),display:"flex",justifyContent:"space-between",position:"relative",flexWrap:"wrap",flexDirection:t?"row-reverse":"row",":last-child":{paddingBottom:e.spacing(48)}},e.breakpoints.down("sm"),{flexDirection:"column"}))},v=function statusIcon(e){return Object(o.c)({marginRight:e.spacing(8),lineHeight:2})},j=function stepTitle(e){return Object(o.c)({display:"flex",marginBottom:e.spacing(8)})},O={check:"check",warning:"warning"},f=function getStatusIconTypeForGradeRow(e,t,n){if(r()(e))return null;if(!e&&(!t||n&&t))return O.warning;return O.check},h=function getStatusIconTitleForGradeRow(e,t){if(r()(e))return;if(!e&&!t)return p()("Activity Incomplete");return p()("Activity Completed")},C=function CoverPageRow(e){var t=e.stepTitle,n=e.stepDetails,i=e.rightSideView,a=e.statusIconType,r=e.statusIconTitle,c=Object(d.a)();return Object(o.d)("div",{css:g(c,!t),"data-e2e":"CoverPageRow"},t&&Object(o.d)("div",{"data-e2e":"CoverPageRow__left-side-view"},Object(o.d)("div",{css:j(c),"data-e2e":"CoverPageRow__step-title"},a&&Object(o.d)("div",{css:v(c)},a===O.check&&Object(o.d)(l.a,{size:"medium",color:"success",title:r}),a===O.warning&&Object(o.d)(b.a,{size:"medium",color:"error",title:r})),Object(o.d)(u.a,{variant:"h3bold"},t)),Object(o.d)("div",{"data-e2e":"CoverPageRow__step-details"},n)),Object(o.d)("div",{"data-e2e":"CoverPageRow__right-side-view"},i))};e.b=C},"71Lh":function(module,e,t){"use strict";t.r(e),t.d(e,"PracticeQuizCoverPage",(function(){return L}));var n=t("AeFk"),i=t("q1tI"),a=t.n(i),r=t("4KRT"),o=t("MnCE"),c=t("+LJP"),s=t("sQ/U"),d=t("6/Gu"),u=t("VMeS"),l=t("sBWo"),b=t("hgsf"),m=t("2iEy"),p=t("jXJP"),g=t("NXzb"),v=t("YdC/"),j=t("YmkS"),O=t("qJwm"),f=t("iMVg"),h=t("zaiP"),C=t("JEIr"),y=t("fHLu"),S=t("w9Ch"),I=t("8mOo"),w=t("VtNW"),P=t.n(w),k,x,L=function PracticeQuizCoverPage(e){var t=e.nextItemUrl,i=e.children,o=e.openPracticeQuizAttemptPage,c=e.openSubmittedPracticeQuizAttemptPage;return Object(n.d)(h.a,null,(function(e){var l=e.item;if(!l||!l.contentSummary)return k||(k=Object(n.d)(u.a,null));return Object(n.d)(C.a,{slug:l.courseSlug,itemId:l.id,userId:s.a.get().id},(function(e){var s=e.loading,h=e.bestSessionId,C=e.bestEvaluation,I=e.lastSessionId,w=e.unsubmittedSessionId,k=e.refetch;if(!l||!l.contentSummary||s)return x||(x=Object(n.d)(u.a,null));if("quiz"===l.contentSummary.typeName){var L,R,E=(l.contentSummary.definition||{}).passingFraction,T=Object(S.a)(C),z=T?T>=E:void 0,A=l.isCumulativeGraded;return Object(n.d)(d.a,{container:!0},Object(n.d)(d.a,{item:!0,xs:12},Object(n.d)(v.a,{assignmentTypeName:P()("Practice Quiz"),item:l,subHeader:Object(n.d)(f.a,{itemId:null==l?void 0:l.id,courseId:null==l?void 0:l.courseId,courseSlug:null==l?void 0:l.courseSlug,learningObjectiveIds:null==l?void 0:l.learningObjectiveIds})})),Object(n.d)(d.a,{item:!0,xs:12},Object(n.d)(m.b,{stepTitle:P()("Submit your assignment"),rightSideView:Object(n.d)(r.ApolloConsumer,null,(function(e){return Object(n.d)(p.a,{startAttempt:I||w?void 0:o,resumeAttempt:w?function(){Object(y.a)(e),o()}:void 0,retryAttempt:function retryAttempt(){Object(y.a)(e),o()}})})),statusIconType:h?m.a.check:void 0,statusIconTitle:h?P()("Activity Completed"):void 0}),Object(n.d)(m.b,{stepTitle:P()("Receive grade"),stepDetails:Object(n.d)(b.a,{passingFraction:E,isCumulativeGraded:A,isRequiredItem:l.isRequiredForPassing}),rightSideView:Object(n.d)(r.ApolloConsumer,null,(function(e){return Object(n.d)(g.a,{itemGrade:"number"==typeof T?{grade:T,isPassed:z||!1,isOverridden:!1,latePenaltyRatio:null}:null,viewFeedback:I?function(){Object(y.a)(e),c()}:void 0,isViewFeedbackButtonLinkStyle:!!w})})),statusIconType:Object(m.d)(z,A),statusIconTitle:Object(m.c)(z,A)})),Object(n.d)("div",{css:function css(e){return Object(n.c)({marginTop:e.spacing(12)})}},Object(n.d)(j.a,{computedItem:l,itemFeedbackType:O.c.Quiz})),i&&k&&a.a.cloneElement(i,{refetchPracticeQuizCoverPageData:function refetchPracticeQuizCoverPageData(){return k().then((function(){return l.refetch()}))},nextItemUrl:t}))}return null}))}))},R=Object(o.compose)(I.a,Object(c.a)((function(e){return{openPracticeQuizAttemptPage:function openPracticeQuizAttemptPage(){e.push({name:"practice-quiz-attempt",params:e.params})},openSubmittedPracticeQuizAttemptPage:function openSubmittedPracticeQuizAttemptPage(){e.push({name:"practice-quiz-view-attempt",params:e.params})}}})))(L);e.default=Object(l.a)(R)},"8mOo":function(module,e,t){"use strict";var n=t("MnCE"),i=t("8cuT"),a=Object(n.compose)(Object(i.a)(["CourseStore"],(function(e,t){var n,i=e.CourseStore,a=t.itemMetadata,r,o,c=i.getMaterials().getNeighbors(a).nextItemMetadataOrItemGroup;return{nextItemUrl:null!==(n=null==c?void 0:c.getLink())&&void 0!==n?n:""}})));e.a=a},"9zoJ":function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"id":true,"ja":true,"ko":true,"pt":true,"ru":true,"uk":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},JEIr:function(module,e,t){"use strict";var n=t("3tO9"),i=t.n(n),a=t("VkAN"),r=t.n(a),o=t("q1tI"),c=t.n(o),s=t("4KRT"),d=t("lTCR"),u,l,b=t.n(d)()(l||(l=r()(['\n  query evaluationsQuery($itemId: String!, $userId: Int!, $slug: String!, $body: String!) {\n    evaluationsQuery(body: $body, itemId: $itemId, userId: $userId, slug: $slug)\n      @rest(\n        type: "RestEvaluations"\n        path: "opencourse.v1/user/{args.userId}/course/{args.slug}/item/{args.itemId}/quiz/evaluations"\n        method: "POST"\n        bodyKey: "body"\n      ) {\n      contentResponseBody @type(name: "RestPracticeQuizQuestionDataResponseBody")\n    }\n  }\n']))),m=function Evaluations(e){var t=e.slug,n=e.userId,a=e.itemId,r=e.children,o={slug:t,itemId:a,userId:n},d={contentRequestBody:{}};return c.a.createElement(s.Query,{query:b,variables:i()(i()({},o),{},{body:d}),fetchPolicy:"network-only"},(function(e){var t,n=e.loading,i=e.data,a=e.refetch,o=e.client;if(n)return r({loading:n});var c=(null==i?void 0:null===(t=i.evaluationsQuery)||void 0===t?void 0:t.contentResponseBody)||{},s=c.bestEvaluation,d=c.bestSessionId,u=c.lastEvaluation,l=c.lastSessionId,b=c.unsubmittedSessionId;return r({loading:!1,bestSessionId:d,bestEvaluation:s,lastEvaluation:u,lastSessionId:l,unsubmittedSessionId:b,refetch:a,client:o})}))};e.a=m},NXzb:function(module,e,t){"use strict";var n=t("VkAN"),i=t.n(n),a=t("UB5X"),r=t.n(a),o=t("AeFk"),c=t("q1tI"),s=t.n(c),d=t("kvW3"),u=t("kgYC"),l=t("8Hdl"),b=t("ZJgU"),m=t("PB6g"),p=t("bOpO"),g=t("hbUA"),v=t("d3Ej"),j=t.n(v),O,f,h,C,y,S,I=function root(e){return Object(o.c)(O||(O=i()(["\n    display: flex;\n    justify-content: space-between;\n    min-width: 300px;\n    min-height: 48px;\n    padding-left: ",";\n    border-left: 1px solid ",";\n    "," {\n      border: none;\n      padding-left: 0;\n      flex-direction: column;\n      margin-left: 0;\n      margin-top: ",";\n    }\n  "])),e.spacing(24),e.palette.gray[300],e.breakpoints.down("sm"),e.spacing(24))},w=function viewFeedbackButton(e){return Object(o.c)(f||(f=i()(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    "," {\n      margin-top: ",";\n    }\n    margin-bottom: ",";\n  "])),e.breakpoints.down("sm"),e.spacing(24),e.spacing(8))},P=function gradeContainer(e){return Object(o.c)(h||(h=i()(["\n    margin-right: ",";\n    "," {\n      margin-bottom: ",";\n      margin-top: ",";\n    }\n  "])),e.spacing(16),e.breakpoints.down("sm"),e.spacing(8),e.spacing(8))},k=function CoverPageRowRightSideGrade(e){var t=e.itemGrade,n=e.computedScore,i=e.maxScore,a=e.viewFeedback,c=e.isViewFeedbackButtonLinkStyle,s=e.isCumulativeGraded,d=e.reviewsExpected,m=void 0===d?0:d,p=e.reviewsReceived,g=void 0===p?0:p,v=e.showKeepHighScoreMsg,O=void 0===v||v,f=e.isRequired,h=void 0!==f&&f,C=Object(u.a)(),y=t||{},S=y.grade,k=y.isPassed,L=r()(S)&&!!k&&(!s||h&&s);return Object(o.d)("div",{css:I(C),"data-e2e":"CoverPageRowRightSideGrade"},Object(o.d)("div",{css:P(C),"data-e2e":"CoverPageRowRightSideGrade__grade-info"},Object(o.d)(l.a,{variant:"h3bold","data-e2e":"CoverPageRowRightSideGrade__grade-label"},j()("Your grade")),Object(o.d)(l.a,{variant:"h1",component:"div",color:L?"success":"error","data-test":"grade-percent","data-e2e":"CoverPageRowRightSideGrade__grade-percent"},Object(o.d)(x,{itemGrade:t,computedScore:n,maxScore:i,reviewsExpected:m,reviewsReceived:g}))),r()(S)&&a&&Object(o.d)("div",{css:w(C),"data-e2e":"CoverPageRowRightSideGrade__view-feedback-section"},Object(o.d)(b.a,{variant:c?"ghost":"primary",onClick:a,"data-test":"feedback-button"},j()("View Feedback")),O&&Object(o.d)(l.a,{variant:"body2",color:"supportText"},j()("We keep your highest score"))))},x=function CoverPageRowGradeDetail(e){var t=e.itemGrade,n=e.computedScore,a=e.maxScore,c=e.reviewsExpected,s=void 0===c?0:c,b=e.reviewsReceived,v=void 0===b?0:b,O,f=(t||{}).grade,h=Object(u.a)();if(r()(f))return Object(o.d)("div",{css:Object(o.c)(C||(C=i()(["\n          display: flex;\n        "]))),"data-e2e":"CoverPageRowRightSideGrade__grade-percent-container"},Object(g.b)(f),Object(o.d)(p.a,{itemGrade:t,computedScore:n,maxScore:a}));if(s>0&&v>0)return Object(o.d)(l.a,{variant:"body2"},Object(o.d)(d.b,{message:j()("In progress, {reviewsReceived, number} of {reviewsExpected, number} received"),reviewsExpected:s,reviewsReceived:v}));return Object(o.d)(l.a,{variant:"h1",component:"p",color:"supportText",css:Object(o.c)(y||(y=i()(["\n        padding: ",";\n      "])),h.spacing(8,0,0,0)),"data-test":"no-grade-text","data-e2e":"CoverPageRowRightSideGrade__no-grade"},S||(S=Object(o.d)("span",{"aria-hidden":"true"},"-")),Object(o.d)(m.b,{tagName:"span"},j()("Not available")))};e.a=k},"YdC/":function(module,e,t){"use strict";var n=t("VkAN"),i=t.n(n),a=t("AeFk"),r=t("q1tI"),o=t.n(r),c=t("JJfJ"),s=t("kgYC"),d=t("8Hdl"),u=t("PB6g"),l,b,m=function header(e){return Object(a.c)(l||(l=i()(["\n    margin: ",";\n    "," {\n      margin: ",";\n    }\n    "," {\n      margin: ",";\n    }\n  "])),e.spacing(32,0),e.breakpoints.up("sm"),e.spacing(48,0,32,0),e.breakpoints.up("md"),e.spacing(48,0))},p=function subHeader(e){return Object(a.c)(b||(b=i()(["\n    margin-top: ",";\n    "," {\n      margin-top: ",";\n    }\n  "])),e.spacing(8),e.breakpoints.up("md"),e.spacing(4))},g=function CoverPageHeader(e){var t=e.assignmentTypeName,n=e.item,i=(n=void 0===n?{}:n).timeCommitment,o=n.name,l=e.subHeader,b=Object(s.a)();return Object(a.d)("div",{css:m(b),"data-e2e":"CoverPageHeader"},Object(a.d)(d.a,{variant:"d2",component:"h1"},o),Object(a.d)(d.a,{variant:"body2",component:"div",css:p(b)},t,!!i&&Object(a.d)(r.Fragment,null,Object(a.d)(u.b,{tagName:"span"},Object(c.w)(i,!0)),Object(a.d)("span",{"aria-hidden":!0}," • ",Object(c.w)(i)))),l&&Object(a.d)("div",{css:p(b)},l))};e.a=g},dlMe:function(module,exports,e){e("/duU")},ePqb:function(module,exports,e){},fHLu:function(module,e,t){"use strict";t.d(e,"a",(function(){return a}));var n=t("S0QZ"),i=function clearQuizApolloCache(e){Object(n.a)(e.cache,["RestQuizSessionMetadataElement","RestQuizQuestionDataElement","LocalTimerState","LocalChangedResponse","LocalStepState","$ROOT_QUERY.ChangedResponse"])},a=function clearPracticeQuizApolloCache(e){Object(n.a)(e.cache,["LocalChangedResponse","LocalStepState"])};e.b=i},"g+zl":function(module,exports,e){var t=e("9zoJ"),n=t.default?t.default:{},i,a=(0,e("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},hIbl:function(module,exports,e){e("ePqb")},hgsf:function(module,e,t){"use strict";var n=t("lSNA"),i=t.n(n),a=t("UB5X"),r=t.n(a),o=t("AeFk"),c=t("q1tI"),s=t.n(c),d=t("kvW3"),u=t("JJfJ"),l=t("kgYC"),b=t("ryMZ"),m=t("izmZ"),p=t("d3Ej"),g=t.n(p),v=function root(e){return Object(o.c)(i()({display:"flex",flexDirection:"column"},e.breakpoints.only("xs"),{flexDirection:"column"}))},j=function row(e){return Object(o.c)(i()({display:"flex",flexDirection:"row",marginBottom:e.spacing(8)},e.breakpoints.only("xs"),{flexDirection:"column",marginBottom:0}))},O=function CoverPageDetails(e){var t=e.deadline,n=e.attemptsCompleted,i=void 0===n?0:n,a=e.attemptsLeft,c=e.attemptsRateCount,s=e.attemptsRateInterval,p=e.passingFraction,O=e.isCumulativeGraded,f=e.lastSubmittedAt,h=e.isRequiredItem,C=void 0!==h&&h,y=Object(l.a)(),S=r()(a)?a+i:null;return Object(o.d)("div",{css:v(y)},Object(o.d)("div",{css:j(y)},t&&Object(o.d)(b.a,{label:g()("Due"),details:Object(u.v)(t,u.i),ariaDetails:Object(u.v)(t,u.b)}),r()(a)&&Object(o.d)(b.a,{label:g()("Attempts"),details:Object(o.d)(d.b,{message:g()("{attemptsLeft, number} left ({attemptsMax, number} total attempts)"),attemptsLeft:Math.max(a,0),attemptsMax:S})}),r()(c)&&r()(s)&&Object(o.d)(b.a,{label:g()("Attempts"),details:Object(o.d)(d.b,{message:g()("{count, number} every {duration}"),count:c,duration:Object(u.w)(s,!0)})}),r()(p)&&(!O||C)&&Object(o.d)(b.a,{label:g()("To Pass"),details:Object(o.d)(d.a,{message:g()("{percent} or higher"),percent:Object(o.d)(m.a,{value:p,maxFractionDigits:0})})})),f&&Object(o.d)("div",{css:j(y)},Object(o.d)(b.a,{label:g()("Submitted"),details:Object(u.v)(f,u.i),ariaDetails:Object(u.v)(f,u.b)})))};e.a=O},iMVg:function(module,e,t){"use strict";var n=t("J4zp"),i=t.n(n),a=t("AeFk"),r=t("q1tI"),o=t.n(r),c=t("ZJgU"),s=t("3AF4"),d=t("s3XC"),u=t("8Hdl"),l=t("3tO9"),b=t.n(l),m=t("8cuT"),p=t("EqTq"),g=t("4XvD"),v=function buildLearningObjectiveToItemIds(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.keys(e).forEach((function(n){e[n].learningObjectives.forEach((function(e){t[e]?t[e].push(n):t[e]=[n]}))})),t},j=function buildFilteredComputedItems(e,t,n){return e.filter((function(e){if(t&&t.includes(e.id)||n&&e.weekNumber>n)return!1;return!0}))},O=t("TdzE"),f=t("Faqi"),h,C=Object(p.a)("LearningObjectiveWithItemsData"),y=function LearningObjectivesWithItemsData(e){var t=e.itemId,n=e.courseSlug,i=void 0===n?"":n,a=e.learningObjectiveIds,r=e.removeParentItem,c=e.removeFutureItems,s=e.buildComputedItem,d=e.children;return(o.a.createElement("div",{className:C()},o.a.createElement(f.a,{slug:i},(function(e){var n=e.courseMaterialsItems,i=e.itemToLearningObjectives,u=null==n?void 0:n.map((function(e){return e.id})),l=v(i);return u?o.a.createElement(g.a,{learningObjectiveIds:a},(function(e){var n=e.learningObjectives,i=t?s(t):void 0,a=i&&r?[i.id]:void 0,o=i&&c?i.weekNumber:void 0,m=null==n?void 0:n.map((function(e){var t=l[e.id].sort((function(e,t){return u.indexOf(e)-u.indexOf(t)})).map((function(e){return s(e)})),n=j(t,a,o);return b()(b()({},e),{},{computedItems:n})}));return d({learningObjectives:m})})):h||(h=o.a.createElement("div",null))}))))},S,I=Object(m.a)(["CourseStore","ProgressStore","CourseScheduleStore","SessionStore","CourseViewGradeStore"],(function(e){var t=e.CourseStore,n=e.ProgressStore,i=e.CourseScheduleStore,a=e.SessionStore,r=e.CourseViewGradeStore;return{buildComputedItem:function buildComputedItem(e){return Object(O.a)({itemMetadata:t.getMaterials().getItemMetadata(e),CourseStore:t,ProgressStore:n,CourseScheduleStore:i,SessionStore:a,CourseViewGradeStore:r})}}}))(y),w=t("kvW3"),P=t("VbXa"),k=t.n(P),x=t("SJ7i"),L=t("CsdX"),R=t("BxDD"),E=t("9Zmq"),T=t("+kEw"),z=t("5Mbi"),A=t("k52k"),B=t("bj29"),M=t("ZJO1"),N=t("MnCE"),D=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n=_objectWithoutPropertiesLoose(e,t),i,a;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++){if(i=r[a],t.indexOf(i)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,i))continue;n[i]=e[i]}}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n={},i=Object.keys(e),a,r;for(r=0;r<i.length;r++){if(a=i[r],t.indexOf(a)>=0)continue;n[a]=e[a]}return n}var F=function SvgWindows(e){var t=e.title,n=void 0===t?"Windows":t,i=_objectWithoutProperties(e,["title"]);return r.createElement(D.a,_extends({title:n},i,{viewBox:"0 0 48 48"}),r.createElement("path",{d:"M10,0 L48,0 L48,38 L38,38 L38,48 L0,48 L0,10 L10,10 L10,0 Z M12,2 L12,10 L38,10 L38,36 L46,36 L46,2 L12,2 Z M2,46 L36,46 L36,12 L2,12 L2,46 Z"}))};(F=Object(N.pure)(F)).displayName="SvgWindows";var q=F,W=t("g+zl"),H=t.n(W),J=t("hIbl"),Q=18,G=Object(p.a)("Panel"),V=function root(e){return e&&Object(a.c)({":hover":{border:"1px solid ".concat(e)}})},U=function header(e,t,n,i,r){return Object(a.c)({width:"100%",padding:"12px ".concat(n,"px"),display:"flex",flexDirection:"row",textAlign:"left",borderBottom:t?"none":"1px solid ".concat(L.b.divider),backgroundColor:r?e.palette.red[100]:i})},Z=function content(e,t,n){return Object(a.c)(b()(b()({padding:"24px ".concat(t,"px")},n&&{padding:0}),{},{borderTop:0},e&&{height:0,padding:0,overflow:"hidden"}))},Y=function draggableIcon(e){return Object(a.c)({display:e?"initial":"none",cursor:"grab",marginLeft:"-20px",marginRight:"4px",marginBottom:"-6.5px",svg:{marginRight:0}})},X=function isRenderPropsFunction(e){return"function"==typeof e},K=function(e){function PanelCore(t){var n;return(n=e.call(this,t)||this).toggleEdit=function(){var e;n.props.isEditable&&n.setState((function(e){var t;return{isEditing:!e.isEditing}}))},n.setEditState=function(e){var t;n.props.isEditable&&n.setState({isEditing:e})},n.togglePanel=function(){var e;n.props.isCollapsible&&n.setState((function(e){var t;return{isCollapsed:!e.isCollapsed}}))},n.setCollapseState=function(e){var t;n.props.isCollapsible&&n.setState({isCollapsed:e})},n.disableDoubleClick=function(e){var t;n.props.isCollapsible&&e.preventDefault()},n.handleMouseEnter=function(){n.setState({isHovered:!0})},n.handleMouseLeave=function(){n.setState({isHovered:!1})},n.state={isCollapsed:t.startCollapsed||!1,isEditing:!1,isHovered:!1},n}var t;return k()(PanelCore,e),PanelCore.prototype.render=function render(){var e=this.props,t=e.id,n=e.className,i=e.title,r=e.children,c=e.isCollapsible,s=void 0!==c&&c,d=e.collapsibleIconTitle,l=e.iconSize,b=void 0===l?18:l,m=e.isEditable,p=void 0!==m&&m,g=e.copyHandler,v=e.deleteHandler,j=e.subtitle,O=e.isHeadless,f=void 0!==O&&O,h=e.isBorderless,C=void 0!==h&&h,y=e.horizontalPadding,S=void 0===y?24:y,I=e.disableContentPadding,w=void 0!==I&&I,P=e.headerBgColor,k=void 0===P?L.b.white:P,x=e.hoverBorderColor,N=e.draggableIcon,D=e.hasErrors,F=void 0!==D&&D,W=e.theme,J=e.forwardedRef,Q=this.state,K=Q.isCollapsed,ee=Q.isEditing,te=Q.isHovered,ne=this.toggleEdit,ie=this.setEditState,ae=this.setCollapseState,re=K&&!ee,oe=re?Object(a.d)(T.a,{title:d,size:b}):Object(a.d)(z.a,{title:d,size:b}),ce=ee?Object(a.d)(E.a,{title:H()("Done Editing"),size:b}):Object(a.d)(A.a,{title:H()("Edit"),size:b}),se=!f&&(i||j||s||g||v||p),de=!!j;return Object(a.d)("div",{id:t,className:G(void 0,{isCollapsed:re,isBorderless:C},n),css:V(x),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,ref:J},se&&Object(a.d)("div",{css:U(W,re,S,k,F)},Object(a.d)(u.a,{component:"h3",className:G("titleContainer",{isCollapsible:s}),onClick:this.togglePanel,onMouseDown:this.disableDoubleClick},N&&Object(a.d)("div",{css:Y(te)},N),F&&Object(a.d)(B.a,{size:18,color:L.b.danger,style:{marginRight:"8px"}}),i&&Object(a.d)("div",{className:G("title",{fitWidth:de})},i),o.a.Children.map(j,(function(e){return Object(a.d)("div",{className:G("subtitle")},e)}))),Object(a.d)("div",{className:G("buttons")},g&&Object(a.d)(R.a,{rootClassName:G("button","copy"),type:"icon",size:"zero",svgElement:Object(a.d)(q,{title:H()("Copy"),color:L.b.icon,size:18}),onClick:g}),v&&Object(a.d)(R.a,{rootClassName:G("button","delete"),type:"icon",size:"zero",svgElement:Object(a.d)(M.a,{color:L.b.icon,title:H()("Delete"),size:18}),onClick:v}),p&&Object(a.d)(R.a,{rootClassName:G("button","edit"),type:"icon",size:"zero",svgElement:ce,onClick:ne}),s&&Object(a.d)(R.a,{rootClassName:G("button","collapse"),type:"icon",size:"zero",svgElement:oe,onClick:this.togglePanel}))),Object(a.d)("div",{"data-test":"panel-content",css:Z(re,S,w),className:G("content",{isCollapsed:re}),"aria-expanded":!re},X(r)?r({isEditing:ee,toggleEdit:ne,setEditState:ie,setCollapseState:ae}):r))},PanelCore}(o.a.Component),ee,te=Object(x.a)(K),ne=t("FHuh"),ie=t("dlMe"),ae=Object(p.a)("LearningObjectiveItem"),re,oe=function LearningObjectiveItem(e){var t=e.computedItem;return(o.a.createElement("div",{className:ae()},o.a.createElement(ne.a,{computedItem:t,trackingName:"learning_objective_review_link",openInNewWindow:!0,iconSize:40})))},ce=t("vrZb"),se=t.n(ce),de={titleContainer:function titleContainer(e){return Object(a.c)({margin:e.spacing(12,0)})},description:function description(e){return Object(a.c)({marginBottom:e.spacing(4)})}},ue,le=function LearningObjectivesWithItemsList(e){var t=e.learningObjectives;return Object(a.d)("div",{"data-e2e":"LearningObjectivesWithItemsList"},null==t?void 0:t.map((function(e,t){var n=e.id,i=e.description,r=e.computedItems;return Object(a.d)("div",{key:"learning-objective-".concat(n),"data-e2e":"LearningObjectivesWithItemsList__objective"},Object(a.d)(te,{key:n,title:Object(a.d)("div",{css:de.titleContainer},Object(a.d)(u.a,{variant:"h2semibold",component:"h3",css:de.description},i),Object(a.d)(u.a,{variant:"body1","data-e2e":"LearningObjectivesWithItemsList__materials-count"},Object(a.d)(w.b,{message:se()("{numItems, plural, =0 {Nothing} one {# material} other {# materials}} to review"),numItems:(null==r?void 0:r.length)||0}))),isCollapsible:!(null==r||!r.length),collapsibleIconTitle:r&&(null==r?void 0:r.length)>1?se()("Materials to review"):se()("Material to review"),startCollapsed:t>0||!(null!=r&&r.length)},null==r?void 0:r.map((function(e){return Object(a.d)("div",{key:"learning-objective-item-".concat(n,"-").concat(e.id),"data-e2e":"LearningObjectivesWithItemsList__item"},Object(a.d)(oe,{computedItem:e}))}))))})))},be={root:function root(e){return Object(a.c)({marginBottom:e.spacing(48)})},instructions:function instructions(e){return Object(a.c)({marginTop:e.spacing(8)})},learningObjectiveContainer:function learningObjectiveContainer(e){return Object(a.c)({marginTop:e.spacing(32)})}},me,pe=function LearningObjectivesContent(e){var t=e.itemId,n=e.courseSlug,i=void 0===n?"":n,r=e.learningObjectiveIds;return Object(a.d)("div",{css:be.root},Object(a.d)(u.a,{variant:"h1semibold",component:"h2"},se()("Review Learning Objectives")),Object(a.d)(u.a,{variant:"body2",css:be.instructions},se()("Review concepts related to your current learning objectives")),Object(a.d)("div",{css:be.learningObjectiveContainer},Object(a.d)(I,{itemId:t,courseSlug:i,learningObjectiveIds:r,removeParentItem:!0,removeFutureItems:!0},(function(e){var t=e.learningObjectives;return Object(a.d)(le,{learningObjectives:t})}))))},ge,ve={linkButton:Object(a.c)({marginLeft:-16})},je=function LearningObjectivesButton(e){var t=e.itemId,n=e.courseSlug,o=e.learningObjectiveIds,u=Object(r.useState)(),l=i()(u,2),b=l[0],m=l[1],p=function toggleTunnelVision(){return m(!b)};if(null==o||!o.length)return null;return Object(a.d)("div",{"data-e2e":"LearningObjectivesButton"},Object(a.d)(c.a,{variant:"ghost",css:ve.linkButton,onClick:p,"data-test":"review-button"},se()("Review Learning Objectives")),b&&Object(a.d)(d.b,{"data-test":"tunnel-vision-wrapper",onClose:p,headerLeft:Object(a.d)(s.b,{headerText:se()("Review Learning Objectives"),itemTypeText:se()("Review materials")}),headerRight:ge||(ge=Object(a.d)("div",null))},Object(a.d)(pe,{"data-test":"learning-objectives-content",itemId:t,courseSlug:n,learningObjectiveIds:o})))},Oe=e.a=je},jXJP:function(module,e,t){"use strict";var n=t("VkAN"),i=t.n(n),a=t("lSNA"),r=t.n(a),o=t("UB5X"),c=t.n(o),s=t("AeFk"),d=t("q1tI"),u=t.n(d),l=t("kvW3"),b=t("JJfJ"),m=t("ZJgU"),p=t("kgYC"),g=t("8Hdl"),v=t("H7bS"),j=t("d2Ft"),O=t("kWps"),f=t("d3Ej"),h=t.n(f),C,y=function styles(e){return{submissionTime:Object(s.c)({marginTop:e.spacing(8),marginBottom:-8}),root:Object(s.c)(r()({},e.breakpoints.down("sm"),{marginTop:e.spacing(12)})),actionButtonStyle:Object(s.c)(r()({display:"flex",justifyContent:"flex-end"},e.breakpoints.down("sm"),{justifyContent:"flex-start"})),retryInfo:Object(s.c)({marginTop:e.spacing(12)}),timeLimitText:Object(s.c)({marginTop:e.spacing(12)})}},S=function renderActionButton(e,t){return Object(s.d)(m.a,{size:"medium",variant:"primary",onClick:t,"aria-labelledby":e,"data-test":"action-button"},e)},I=function CoverPageRowRightSideActions(e){var t=e.startAttempt,n=e.restartAttempt,a=e.resumeAttempt,r=e.retryAttempt,o=e.submissionTime,d=e.showTimer,u=e.timeLimit,f=e.timerId,I=e.attemptsLeft,w=e.secondsLeftInLatestAttempt,P=e.attemptLimitTimeLeft,k=null,x=Object(p.a)(),L=y(x),R=c()(P)||"number"==typeof I&&I<=0;return t?k=S(h()("Start assignment"),t):n?k=S(h()("Restart assignment"),n):a?k=S(h()("Resume assignment"),a):r&&(k=Object(s.d)(m.a,{size:"medium",variant:"ghost","data-test":"action-button","aria-labelledby":h()("Try again"),component:"a",onClick:r,disabled:R},h()("Try again"))),Object(s.d)("div",{css:L.root},Object(s.d)("div",{css:L.actionButtonStyle},k),R&&c()(P)&&Object(s.d)("div",{css:L.retryInfo,"data-test":"retry-info"},Object(s.d)(g.a,{variant:"body2",component:"span",color:"supportText"},Object(s.d)(l.b,{message:h()("Retake the quiz in {attemptLimitTimeLeft}"),attemptLimitTimeLeft:Object(s.d)("strong",null,Object(b.w)(P))}))),o&&Object(s.d)("div",{css:L.submissionTime,"data-test":"submission-time-detail"},Object(s.d)(g.a,{variant:"h4bold",component:"span",color:"supportText"},h()("Submitted"))," ",Object(s.d)(g.a,{variant:"body2",component:"span",color:"supportText"},O.a.getFormattedDeadline(o))),c()(u)&&t&&Object(s.d)("div",null,Object(s.d)(g.a,{variant:"body2"},Object(s.d)(v.a,{size:"medium",color:"default",css:Object(s.c)(C||(C=i()(["\n                transform: translateY(4px);\n              "])))}),Object(s.d)("span",{css:L.timeLimitText},Object(s.d)(l.b,{message:h()("You will have {timeLimit} to finish"),timeLimit:Object(b.w)(u,!0)})))),d&&c()(w)&&Object(s.d)(j.a,{timerId:f,remainingTimeInMs:1e3*w,displayRemaining:!0}))};e.a=I},ryMZ:function(module,e,t){"use strict";var n=t("lSNA"),i=t.n(n),a=t("AeFk"),r=t("q1tI"),o=t.n(r),c=t("kgYC"),s=t("8Hdl"),d=t("PB6g"),u=function root(e){return Object(a.c)({whiteSpace:"nowrap","& + &":i()({marginLeft:e.spacing(16)},e.breakpoints.down("xs"),{marginLeft:0})})},l=function label(e){return Object(a.c)({marginRight:e.spacing(8)})},b=function CoverPagePhaseDetail(e){var t=e.label,n=e.details,i=e.ariaDetails,r=Object(c.a)();return Object(a.d)("div",{css:u(r),"data-e2e":"CoverPagePhaseDetail"},Object(a.d)(s.a,{variant:"h4bold",component:"span",css:l(r),color:"supportText","data-test":"label"},t)," ",Object(a.d)(s.a,{variant:"body2",component:"span",color:"supportText","data-test":"content","data-e2e":"CoverPagePhaseDetail__content"},i&&Object(a.d)(d.b,{tagName:"span"},i),Object(a.d)("span",{"aria-hidden":Boolean(i)},n)))};e.a=b}}]);
//# sourceMappingURL=en.66.587eccc8ad820385bbc7.js.map