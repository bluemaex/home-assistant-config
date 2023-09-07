!function(){"use strict";var t,i=function(){return i=Object.assign||function(t){for(var i,e=1,o=arguments.length;e<o;e++)for(var n in i=arguments[e])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t},i.apply(this,arguments)};function e(t,i,e,o){return new(e||(e=Promise))((function(n,a){function _(t){try{E(o.next(t))}catch(t){a(t)}}function O(t){try{E(o.throw(t))}catch(t){a(t)}}function E(t){var i;t.done?n(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(_,O)}E((o=o.apply(t,i||[])).next())}))}function o(t,i){var e,o,n,a,_={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:O(0),throw:O(1),return:O(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function O(O){return function(E){return function(O){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,O[0]&&(_=0)),_;)try{if(e=1,o&&(n=2&O[0]?o.return:O[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,O[1])).done)return n;switch(o=0,n&&(O=[2&O[0],n.value]),O[0]){case 0:case 1:n=O;break;case 4:return _.label++,{value:O[1],done:!1};case 5:_.label++,o=O[1],O=[0];continue;case 7:O=_.ops.pop(),_.trys.pop();continue;default:if(!(n=_.trys,(n=n.length>0&&n[n.length-1])||6!==O[0]&&2!==O[0])){_=0;continue}if(3===O[0]&&(!n||O[1]>n[0]&&O[1]<n[3])){_.label=O[1];break}if(6===O[0]&&_.label<n[1]){_.label=n[1],n=O;break}if(n&&_.label<n[2]){_.label=n[2],_.ops.push(O);break}n[2]&&_.ops.pop(),_.trys.pop();continue}O=i.call(t,_)}catch(t){O=[6,t],o=0}finally{e=n=0}if(5&O[0])throw O[1];return{value:O[0]?O[1]:void 0,done:!0}}([O,E])}}}"function"==typeof SuppressedError&&SuppressedError;var n,a,_="kiosk-mode",O="kiosk_mode",E="[ Non critial warning ]",r=":shadowRoot";!function(t){t.HEADER="kmHeader",t.SIDEBAR="kmSidebar",t.OVERFLOW="kmOverflow",t.MENU_BUTTON="kmMenuButton",t.ACCOUNT="kmAccount",t.NOTIFICATIONS="kmNotifications",t.SEARCH="kmSearch",t.ASSISTANT="kmAssistant",t.REFRESH="kmRefresh",t.UNUSED_ENTITIES="kmUnusedEntities",t.RELOAD_RESOURCES="kmReloadResources",t.EDIT_DASHBOARD="kmEditDashboard",t.DIALOG_HEADER_ACTION_ITEMS="kmDialogHeaderActionItems",t.DIALOG_HEADER_HISTORY="kmDialogHeaderHistory",t.DIALOG_HEADER_SETTINGS="kmDialogHeaderSettings",t.DIALOG_HEADER_OVERFLOW="kmDialogHeaderOverflow",t.DIALOG_HISTORY="kmDialogHistory",t.DIALOG_LOGBOOK="kmDialogLogbook",t.DIALOG_ATTRIBUTES="kmDialogAttributes",t.DIALOG_MEDIA_ACTIONS="kmDialogMediaActions",t.DIALOG_UPDATE_ACTIONS="kmDialogUpdateActions",t.DIALOG_CLIMATE_ACTIONS="kmDialogClimateActions",t.DIALOG_TIMER_ACTIONS="kmDialogTimerActions",t.DIALOG_HISTORY_SHOW_MORE="kmDialogHistoryShowMore",t.DIALOG_LOGBOOK_SHOW_MORE="kmDialogLogbookShowMore",t.OVERFLOW_MOUSE="kmOverflowMouse",t.MOUSE="kmMouse"}(n||(n={})),function(t){t.KIOSK="kiosk",t.CACHE="cache",t.CLEAR_CACHE="clear_km_cache",t.DISABLE_KIOSK_MODE="disable_km",t.HIDE_SIDEBAR="hide_sidebar",t.HIDE_HEADER="hide_header",t.HIDE_OVERFLOW="hide_overflow",t.HIDE_MENU_BUTTON="hide_menubutton",t.HIDE_ACCOUNT="hide_account",t.HIDE_NOTIFICATIONS="hide_notifications",t.HIDE_SEARCH="hide_search",t.HIDE_ASSISTANT="hide_assistant",t.HIDE_REFRESH="hide_refresh",t.HIDE_UNUSED_ENTITIES="hide_unused_entities",t.HIDE_RELOAD_RESOURCES="hide_reload_resources",t.HIDE_EDIT_DASHBOARD="hide_edit_dashboard",t.HIDE_DIALOG_HEADER_ACTION_ITEMS="hide_dialog_header_action_items",t.HIDE_DIALOG_HEADER_HISTORY="hide_dialog_header_history",t.HIDE_DIALOG_HEADER_SETTINGS="hide_dialog_header_settings",t.HIDE_DIALOG_HEADER_OVERFLOW="hide_dialog_header_overflow",t.HIDE_DIALOG_HISTORY="hide_dialog_history",t.HIDE_DIALOG_LOGBOOK="hide_dialog_logbook",t.HIDE_DIALOG_ATTRIBUTES="hide_dialog_attributes",t.HIDE_DIALOG_MEDIA_ACTIONS="hide_dialog_media_actions",t.HIDE_DIALOG_UPDATE_ACTIONS="hide_dialog_update_actions",t.HIDE_DIALOG_CLIMATE_ACTIONS="hide_dialog_climate_actions",t.HIDE_DIALOG_TIMER_ACTIONS="hide_dialog_timer_actions",t.HIDE_DIALOG_HISTORY_SHOW_MORE="hide_dialog_history_show_more",t.HIDE_DIALOG_LOGBOOK_SHOW_MORE="hide_dialog_logbook_show_more",t.BLOCK_OVERFLOW="block_overflow",t.BLOCK_MOUSE="block_mouse",t.IGNORE_ENTITY_SETTINGS="ignore_entity_settings",t.IGNORE_MOBILE_SETTINGS="ignore_mobile_settings",t.IGNORE_DISABLE_KM="ignore_disable_km"}(a||(a={}));var s,c="ui",I="".concat(c,".common"),A="".concat(c,".panel"),D="".concat(A,".lovelace"),h="".concat(D,".menu"),d="".concat(c,".dialogs.more_info_control");!function(t){t.SEARCH="SEARCH",t.ASSIST="ASSIST",t.REFRESH="REFRESH",t.UNUSED_ENTITIES="UNUSED_ENTITIES",t.RELOAD_RESOURCES="RELOAD_RESOURCES",t.EDIT_DASHBOARD="EDIT_DASHBOARD",t.DIALOG_DISMISS="DIALOG_DISMISS",t.DIALOG_HISTORY="DIALOG_HISTORY",t.DIALOG_SETTINGS="DIALOG_SETTINGS"}(s||(s={}));var T,S=Object.freeze(((t={})[s.SEARCH]="".concat(h,".search"),t[s.ASSIST]="".concat(h,".assist"),t[s.REFRESH]="".concat(I,".refresh"),t[s.UNUSED_ENTITIES]="".concat(D,".unused_entities.title"),t[s.RELOAD_RESOURCES]="".concat(h,".reload_resources"),t[s.EDIT_DASHBOARD]="".concat(h,".configure_ui"),t[s.DIALOG_HISTORY]="".concat(d,".history"),t[s.DIALOG_SETTINGS]="".concat(d,".settings"),t[s.DIALOG_DISMISS]="".concat(d,".dismiss"),t));!function(t){t.HOME_ASSISTANT="home-assistant",t.HOME_ASSISTANT_MAIN="home-assistant-main",t.HA_PANEL_LOVELACE="ha-panel-lovelace",t.PARTIAL_PANEL_RESOLVER="partial-panel-resolver",t.HUI_ROOT="hui-root",t.HUI_VIEW="hui-view",t.MENU_ITEM="ha-icon-button",t.MENU_ITEM_ICON="mwc-icon-button",t.BUTTON_MENU="ha-button-menu",t.OVERLAY_MENU_ITEM="mwc-list-item",t.HA_SIDEBAR="ha-sidebar",t.HA_DRAWER="ha-drawer",t.TOOLBAR=".toolbar",t.ACTION_ITEMS=".action-items",t.HA_MORE_INFO_DIALOG="ha-more-info-dialog",t.HA_DIALOG="ha-dialog",t.HA_DIALOG_HEADER="ha-dialog-header",t.HA_DIALOG_CONTENT=".content",t.HA_DIALOG_MORE_INFO="ha-more-info-info",t.HA_DIALOG_HISTORY="ha-more-info-history",t.HA_DIALOG_LOGBOOK="ha-more-info-logbook",t.HA_DIALOG_MORE_INFO_CONTENT="more-info-content",t.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK="ha-more-info-history-and-logbook",t.HA_DIALOG_DEFAULT="more-info-default",t.HA_DIALOG_TIMER="more-info-timer",t.HA_DIALOG_VACUUM="more-info-vacuum",t.HA_DIALOG_MEDIA_PLAYER="more-info-media_player",t.HA_DIALOG_UPDATE="more-info-update",t.HA_DIALOG_CLIMATE="more-info-climate",t.HA_DIALOG_ATTRIBUTES="ha-attributes"}(T||(T={}));var u,l="true",R="state_changed",H=function(t){return Array.isArray(t)?t:[t]},L=function(t){return t instanceof ShadowRoot?t.host.localName:t.localName},N=function(t){var i=L(t);return t.querySelector("#".concat(O,"_").concat(i))},f=function(t,i){var e=L(i),o=N(i);o||((o=document.createElement("style")).setAttribute("id","".concat(O,"_").concat(e)),i.appendChild(o)),o.innerHTML=t},G=function(t){H(t).forEach((function(t){var i=L(t);N(t)&&t.querySelector("#".concat(O,"_").concat(i)).remove()}))},M=function(t){return H(t).some((function(t){return window.location.search.includes(t)}))},C=function(t,i){H(t).forEach((function(t){return window.localStorage.setItem(t,i)}))},g=function(t){return H(t).some((function(t){return window.localStorage.getItem(t)===l}))},U=function(t){return Object.entries(t).map((function(t){var i=t[0],e=t[1];return"".concat(i,":").concat(e)})).join(";")+";"},v=function(t){return Object.entries(t).map((function(t){var i=t[0],e=t[1];return"".concat(i,"{").concat(U(e),"}")})).join("")},p=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return t.map((function(t){return"".concat(t,"{display: none !important;}")})).join("")},m=function(t){var i=0,e=Object.values(S);return new Promise((function(o,n){var a=function(){var _,O=null===(_=null==t?void 0:t.hass)||void 0===_?void 0:_.resources,E=!1;if(O){var r=t.hass.language;e.find((function(t){return!O[r][t]}))||(E=!0)}E?o(O):++i<500?setTimeout(a,50):n()};a()}))},w=function(t,i,e){return new Promise((function(o,n){var a=0,O=function(){var E=t();E&&i(E)?o(E):++a<500?setTimeout(O,50):n(new Error("".concat(_,": Cannot select ").concat(e," after ").concat(500," attempts. Giving up!")))};O()}))},b=function(t,i){t.forEach((function(t){if(t&&t.dataset&&!t.dataset.selector){var e=t.shadowRoot.querySelector(T.MENU_ITEM_ICON);t.dataset.selector=i[e.title]}}))},B={HEADER:v({"#view":{"min-height":"100vh !important","--header-height":"0px"},".header":{display:"none"}}),ACCOUNT:p(".profile"),NOTIFICATIONS:p(".notifications-container"),DIVIDER:p(".divider"),PEPER_LISTBOX:function(t,i){var e=132;return t&&i?e=0:t?e-=50:i&&(e-=48),v({"paper-listbox":{height:"calc(100% - var(--header-height) - ".concat(e,"px - env(safe-area-inset-bottom)) !important")}})},MENU_BUTTON:p(".menu ha-icon-button"),MENU_BUTTON_BURGER:p("ha-menu-button"),MOUSE:v({"body::after":{bottom:"0",content:'""',cursor:"none",display:"block",left:"0",position:"fixed",right:"0",top:"0","z-index":"999999"}}),SIDEBAR:v({":host":{"--mdc-drawer-width":"0 !important"},"partial-panel-resolver":{"--mdc-top-app-bar-width":"100% !important"},"ha-drawer > ha-sidebar":{display:"none"},".header":{width:"100% !important"}}),ASIDE:p(".mdc-drawer"),OVERFLOW_MENU:p("".concat(T.TOOLBAR," > ").concat(T.ACTION_ITEMS," > ").concat(T.BUTTON_MENU)),BLOCK_OVERFLOW:v((u={},u["".concat(T.TOOLBAR," > ").concat(T.ACTION_ITEMS," > ").concat(T.BUTTON_MENU)]={"pointer-events":"none !important"},u)),SEARCH:p("".concat(T.TOOLBAR," > ").concat(T.ACTION_ITEMS,' > ha-icon-button[data-selector="').concat(s.SEARCH,'"]'),"".concat(T.TOOLBAR," > ").concat(T.ACTION_ITEMS," > ").concat(T.BUTTON_MENU," > ").concat(T.OVERLAY_MENU_ITEM,'[data-selector="').concat(s.SEARCH,'"]')),ASSISTANT:p("".concat(T.TOOLBAR," > ").concat(T.ACTION_ITEMS,' > ha-icon-button[data-selector="').concat(s.ASSIST,'"]'),"".concat(T.TOOLBAR," > ").concat(T.ACTION_ITEMS," > ").concat(T.BUTTON_MENU," > ").concat(T.OVERLAY_MENU_ITEM,'[data-selector="').concat(s.ASSIST,'"]')),REFRESH:p("".concat(T.TOOLBAR," > ").concat(T.ACTION_ITEMS," > ").concat(T.BUTTON_MENU," > ").concat(T.OVERLAY_MENU_ITEM,'[data-selector="').concat(s.REFRESH,'"]')),UNUSED_ENTITIES:p("".concat(T.TOOLBAR," > ").concat(T.ACTION_ITEMS," > ").concat(T.BUTTON_MENU," > ").concat(T.OVERLAY_MENU_ITEM,'[data-selector="').concat(s.UNUSED_ENTITIES,'"]')),RELOAD_RESOURCES:p("".concat(T.TOOLBAR," > ").concat(T.ACTION_ITEMS," > ").concat(T.BUTTON_MENU," > ").concat(T.OVERLAY_MENU_ITEM,'[data-selector="').concat(s.RELOAD_RESOURCES,'"]')),EDIT_DASHBOARD:p("".concat(T.TOOLBAR," > ").concat(T.ACTION_ITEMS," > ").concat(T.BUTTON_MENU," > ").concat(T.OVERLAY_MENU_ITEM,'[data-selector="').concat(s.EDIT_DASHBOARD,'"]')),DIALOG_HEADER_HISTORY:p("".concat(T.HA_DIALOG_HEADER," > ").concat(T.MENU_ITEM,'[data-selector="').concat(s.DIALOG_HISTORY,'"]')),DIALOG_HEADER_SETTINGS:p("".concat(T.HA_DIALOG_HEADER," > ").concat(T.MENU_ITEM,'[data-selector="').concat(s.DIALOG_SETTINGS,'"]')),DIALOG_HEADER_OVERFLOW:p("".concat(T.HA_DIALOG_HEADER," > ").concat(T.BUTTON_MENU)),DIALOG_HISTORY:p(T.HA_DIALOG_HISTORY),DIALOG_LOGBOOK:p(T.HA_DIALOG_LOGBOOK),DIALOG_ATTRIBUTES:p(T.HA_DIALOG_ATTRIBUTES),DIALOG_MEDIA_ACTIONS:p(".controls"),DIALOG_TIMER_ACTIONS:p(".actions"),DIALOG_UPDATE_ACTIONS:p(".actions","hr:has(+ .actions)"),DIALOG_CLIMATE_ACTIONS:p(T.HA_DIALOG_CLIMATE),DIALOG_SHOW_MORE:p(".header a")},y=function(){function t(){this.lines=[{content:"%c≡ kiosk-mode",color:"white",background:"#03a9f4"},{content:"%cversion ".concat("3.1.0")}]}return t.prototype.log=function(){var t=[],e=[],o=this.lines.length-1,n={"border-color":"#424242","border-style":"solid",display:"inline-block","font-family":"monospace","font-size":"12px"};this.lines.forEach((function(a,_){t.push(a.content.padEnd(27)),t.push("%c⋮"),_!==o&&t.push("%c\n");var O="0 0 0 1px",E="0 1px 0 1px";0===o?(O="1px 0 1px 1px",E="1px 1px 1px 0"):0===_?(O="1px 0 0 1px",E="1px 1px 0 0"):_===o&&(O="0 0 1px 1px",E="0 1px 1px 0"),e.push(U(i(i({},n),{background:a.background||"white",color:a.color||"#424242",padding:0===_?"1px 0px 1px 5px":"1px 0px 1px 10px","border-width":O}))),e.push(U(i(i({},n),{background:a.background||"white",color:a.color||"white",padding:0===_?"1px 5px":"1px 5px 1px 0px","border-width":E}))),_!==o&&e.push("")})),console.info.apply(console,function(t,i,e){if(e||2===arguments.length)for(var o,n=0,a=i.length;n<a;n++)!o&&n in i||(o||(o=Array.prototype.slice.call(i,0,n)),o[n]=i[n]);return t.concat(o||Array.prototype.slice.call(i))}([t.join("")],e,!1))},t}(),k=function(){function t(){var t=this;window.kioskModeEntities={},M(a.CLEAR_CACHE)&&C([n.HEADER,n.SIDEBAR,n.OVERFLOW,n.MENU_BUTTON,n.ACCOUNT,n.NOTIFICATIONS,n.SEARCH,n.ASSISTANT,n.REFRESH,n.UNUSED_ENTITIES,n.RELOAD_RESOURCES,n.EDIT_DASHBOARD,n.DIALOG_HEADER_ACTION_ITEMS,n.DIALOG_HEADER_HISTORY,n.DIALOG_HEADER_SETTINGS,n.DIALOG_HEADER_OVERFLOW,n.DIALOG_HISTORY,n.DIALOG_LOGBOOK,n.DIALOG_ATTRIBUTES,n.DIALOG_MEDIA_ACTIONS,n.DIALOG_UPDATE_ACTIONS,n.DIALOG_CLIMATE_ACTIONS,n.DIALOG_TIMER_ACTIONS,n.DIALOG_HISTORY_SHOW_MORE,n.DIALOG_LOGBOOK_SHOW_MORE,n.OVERFLOW_MOUSE,n.MOUSE],"false");e(t,void 0,void 0,(function(){var t,i,e,n,a=this;return o(this,(function(o){switch(o.label){case 0:return t=this,[4,w((function(){return document.querySelector(T.HOME_ASSISTANT)}),(function(t){return!(!t||!t.shadowRoot)}),T.HOME_ASSISTANT)];case 1:return t.ha=o.sent(),i=this,[4,w((function(){var t;return null===(t=a.ha.shadowRoot.querySelector(T.HOME_ASSISTANT_MAIN))||void 0===t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(T.HOME_ASSISTANT_MAIN).concat(r))];case 2:return i.main=o.sent(),e=this,[4,w((function(){var t,i;return null===(i=null===(t=a.ha)||void 0===t?void 0:t.hass)||void 0===i?void 0:i.user}),(function(t){return!!t}),"".concat(T.HOME_ASSISTANT," > hass > user"))];case 3:return e.user=o.sent(),[4,w((function(){return a.main.querySelector(T.PARTIAL_PANEL_RESOLVER)}),(function(t){return!!t}),"".concat(T.HOME_ASSISTANT_MAIN," > ").concat(T.PARTIAL_PANEL_RESOLVER))];case 4:return n=o.sent(),this.panelResolverObserver=new MutationObserver(this.watchDashboards),this.dialogsMutationObserver=new MutationObserver(this.watchMoreInfoDialogs),this.dialogContentMutationObserver=new MutationObserver(this.watchMoreInfoDialogsContent),this.panelResolverObserver.observe(n,{childList:!0}),this.dialogsMutationObserver.observe(this.ha.shadowRoot,{childList:!0}),this.run(),this.entityWatch(),[2]}}))})),this.resizeWindowBinded=this.resizeWindow.bind(this)}return t.prototype.run=function(t){var i=this;if(void 0===t&&(t=this.main.querySelector(T.HA_PANEL_LOVELACE)),t)return this.lovelace=t,w((function(){var i;return null===(i=null==t?void 0:t.lovelace)||void 0===i?void 0:i.config}),(function(t){return!!t}),"Lovelace config").then((function(t){return i.processConfig(t.kiosk_mode||{})}))},t.prototype.runDialogs=function(t){var i,n;return void 0===t&&(t=null===(n=null===(i=this.ha)||void 0===i?void 0:i.shadowRoot)||void 0===n?void 0:n.querySelector(T.HA_MORE_INFO_DIALOG)),e(this,void 0,void 0,(function(){var i,e,n,a=this;return o(this,(function(o){switch(o.label){case 0:return t?[4,w((function(){return null==t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(T.HA_MORE_INFO_DIALOG,":").concat(r))]:[2];case 1:return i=o.sent(),[4,w((function(){return i.querySelector(T.HA_DIALOG)}),(function(t){return!!t}),"".concat(T.HA_MORE_INFO_DIALOG,":").concat(r," > ").concat(T.HA_DIALOG))];case 2:return e=o.sent(),[4,w((function(){return e.querySelector(T.HA_DIALOG_CONTENT)}),(function(t){return!!t}),"".concat(T.HA_DIALOG," > ").concat(T.HA_DIALOG_CONTENT))];case 3:return n=o.sent(),w((function(){return n.querySelector("".concat(T.HA_DIALOG_MORE_INFO,", ").concat(T.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK))}),(function(t){return!!t}),"".concat(T.HA_DIALOG," > ").concat(T.HA_DIALOG_CONTENT," > child")).then((function(t){a.dialogContentMutationObserver.disconnect(),a.dialogContentMutationObserver.observe(n,{childList:!0}),a.runDialogsChildren(t)})).catch((function(){})),this.insertDialogStyles(e),[2]}}))}))},t.prototype.runDialogsChildren=function(t){return e(this,void 0,void 0,(function(){var i;return o(this,(function(e){switch(e.label){case 0:return!t||t.localName!==T.HA_DIALOG_MORE_INFO&&t.localName!==T.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK?[2]:[4,w((function(){return t.shadowRoot}),(function(t){return!!t}),"".concat(T.HA_DIALOG," > ").concat(T.HA_DIALOG_CONTENT," > ").concat(t.localName,":").concat(r))];case 1:return i=e.sent(),this.insertDialogChildStyles(i),[2]}}))}))},t.prototype.processConfig=function(t){return e(this,void 0,void 0,(function(){var i,O,s,c,I,A,D,h,d,u,l,R=this;return o(this,(function(L){switch(L.label){case 0:return i=this.ha.hass.panelUrl,window.kioskModeEntities[i]||(window.kioskModeEntities[i]=[]),this.hideHeader=!1,this.hideSidebar=!1,this.hideOverflow=!1,this.hideMenuButton=!1,this.hideAccount=!1,this.hideNotifications=!1,this.hideSearch=!1,this.hideAssistant=!1,this.hideRefresh=!1,this.hideUnusedEntities=!1,this.hideReloadResources=!1,this.hideEditDashboard=!1,this.hideDialogHeaderActionItems=!1,this.hideDialogHeaderHistory=!1,this.hideDialogHeaderSettings=!1,this.hideDialogHeaderOverflow=!1,this.hideDialogHistory=!1,this.hideDialogLogbook=!1,this.hideDialogAttributes=!1,this.hideDialogMediaActions=!1,this.hideDialogUpdateActions=!1,this.hideDialogClimateActions=!1,this.hideDialogTimerActions=!1,this.hideDialogHistoryShowMore=!1,this.hideDialogLogbookShowMore=!1,this.blockOverflow=!1,this.blockMouse=!1,this.ignoreEntity=!1,this.ignoreMobile=!1,this.ignoreDisableKm=!1,O=this,[4,w((function(){var t,i,e;return null===(e=null===(i=null===(t=R.lovelace)||void 0===t?void 0:t.shadowRoot)||void 0===i?void 0:i.querySelector(T.HUI_ROOT))||void 0===e?void 0:e.shadowRoot}),(function(t){return!!t}),"".concat(T.HUI_ROOT).concat(r))];case 1:return O.huiRoot=L.sent(),s=this,[4,w((function(){return R.main.querySelector(T.HA_DRAWER)}),(function(t){return!!t}),T.HA_DRAWER)];case 2:return s.drawerLayout=L.sent(),c=this,[4,w((function(){return R.huiRoot.querySelector(T.TOOLBAR)}),(function(t){return!!t}),T.TOOLBAR)];case 3:return c.appToolbar=L.sent(),I=this,[4,w((function(){var t;return null===(t=R.drawerLayout.querySelector(T.HA_SIDEBAR))||void 0===t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(T.HA_SIDEBAR).concat(r))];case 4:return I.sideBarRoot=L.sent(),(N=this.ha,e(void 0,void 0,void 0,(function(){var t,i,e,n,a;return o(this,(function(o){switch(o.label){case 0:return[4,m(N)];case 1:return t=o.sent(),i=N.hass.language,e=t[i],n=Object.entries(S),a=n.map((function(t){var i=t[0],o=t[1];return[e[o],i]})),[2,Object.fromEntries(a)]}}))}))).then((function(t){R.menuTranslations=t,R.updateMenuItemsLabels()})).catch((function(){console.warn("".concat(_,": ").concat(E," Cannot get resources translations"))})),A=g([n.HEADER,n.SIDEBAR,n.OVERFLOW,n.MENU_BUTTON,n.ACCOUNT,n.NOTIFICATIONS,n.SEARCH,n.ASSISTANT,n.REFRESH,n.UNUSED_ENTITIES,n.RELOAD_RESOURCES,n.EDIT_DASHBOARD,n.DIALOG_HEADER_ACTION_ITEMS,n.DIALOG_HEADER_HISTORY,n.DIALOG_HEADER_SETTINGS,n.DIALOG_HEADER_OVERFLOW,n.DIALOG_HISTORY,n.DIALOG_LOGBOOK,n.DIALOG_ATTRIBUTES,n.DIALOG_MEDIA_ACTIONS,n.DIALOG_UPDATE_ACTIONS,n.DIALOG_CLIMATE_ACTIONS,n.DIALOG_TIMER_ACTIONS,n.DIALOG_HISTORY_SHOW_MORE,n.DIALOG_LOGBOOK_SHOW_MORE,n.OVERFLOW_MOUSE,n.MOUSE]),D=M([a.KIOSK,a.HIDE_HEADER,a.HIDE_SIDEBAR,a.HIDE_OVERFLOW,a.HIDE_MENU_BUTTON,a.HIDE_ACCOUNT,a.HIDE_NOTIFICATIONS,a.HIDE_SEARCH,a.HIDE_ASSISTANT,a.HIDE_REFRESH,a.HIDE_RELOAD_RESOURCES,a.HIDE_UNUSED_ENTITIES,a.HIDE_EDIT_DASHBOARD,a.HIDE_DIALOG_HEADER_ACTION_ITEMS,a.HIDE_DIALOG_HEADER_HISTORY,a.HIDE_DIALOG_HEADER_SETTINGS,a.HIDE_DIALOG_HEADER_OVERFLOW,a.HIDE_DIALOG_HISTORY,a.HIDE_DIALOG_LOGBOOK,a.HIDE_DIALOG_ATTRIBUTES,a.HIDE_DIALOG_MEDIA_ACTIONS,a.HIDE_DIALOG_UPDATE_ACTIONS,a.HIDE_DIALOG_CLIMATE_ACTIONS,a.HIDE_DIALOG_TIMER_ACTIONS,a.HIDE_DIALOG_HISTORY_SHOW_MORE,a.HIDE_DIALOG_LOGBOOK_SHOW_MORE,a.BLOCK_OVERFLOW,a.BLOCK_MOUSE]),A||D?(this.hideHeader=g(n.HEADER)||M([a.KIOSK,a.HIDE_HEADER]),this.hideSidebar=g(n.SIDEBAR)||M([a.KIOSK,a.HIDE_SIDEBAR]),this.hideOverflow=g(n.OVERFLOW)||M(a.HIDE_OVERFLOW),this.hideMenuButton=g(n.MENU_BUTTON)||M(a.HIDE_MENU_BUTTON),this.hideAccount=g(n.ACCOUNT)||M(a.HIDE_ACCOUNT),this.hideNotifications=g(n.NOTIFICATIONS)||M(a.HIDE_NOTIFICATIONS),this.hideSearch=g(n.SEARCH)||M(a.HIDE_SEARCH),this.hideAssistant=g(n.ASSISTANT)||M(a.HIDE_ASSISTANT),this.hideRefresh=g(n.REFRESH)||M(a.HIDE_REFRESH),this.hideUnusedEntities=g(n.UNUSED_ENTITIES)||M(a.HIDE_UNUSED_ENTITIES),this.hideReloadResources=g(n.RELOAD_RESOURCES)||M(a.HIDE_RELOAD_RESOURCES),this.hideEditDashboard=g(n.EDIT_DASHBOARD)||M(a.HIDE_EDIT_DASHBOARD),this.hideDialogHeaderActionItems=g(n.DIALOG_HEADER_ACTION_ITEMS)||M(a.HIDE_DIALOG_HEADER_ACTION_ITEMS),this.hideDialogHeaderHistory=g(n.DIALOG_HEADER_HISTORY)||M(a.HIDE_DIALOG_HEADER_HISTORY),this.hideDialogHeaderSettings=g(n.DIALOG_HEADER_SETTINGS)||M(a.HIDE_DIALOG_HEADER_SETTINGS),this.hideDialogHeaderOverflow=g(n.DIALOG_HEADER_OVERFLOW)||M(a.HIDE_DIALOG_HEADER_OVERFLOW),this.hideDialogHistory=g(n.DIALOG_HISTORY)||M(a.HIDE_DIALOG_HISTORY),this.hideDialogLogbook=g(n.DIALOG_LOGBOOK)||M(a.HIDE_DIALOG_LOGBOOK),this.hideDialogAttributes=g(n.DIALOG_ATTRIBUTES)||M(a.HIDE_DIALOG_ATTRIBUTES),this.hideDialogMediaActions=g(n.DIALOG_MEDIA_ACTIONS)||M(a.HIDE_DIALOG_MEDIA_ACTIONS),this.hideDialogUpdateActions=g(n.DIALOG_UPDATE_ACTIONS)||M(a.HIDE_DIALOG_UPDATE_ACTIONS),this.hideDialogClimateActions=g(n.DIALOG_CLIMATE_ACTIONS)||M(a.HIDE_DIALOG_CLIMATE_ACTIONS),this.hideDialogTimerActions=g(n.DIALOG_TIMER_ACTIONS)||M(a.HIDE_DIALOG_TIMER_ACTIONS),this.hideDialogHistoryShowMore=g(n.DIALOG_HISTORY_SHOW_MORE)||M(a.HIDE_DIALOG_HISTORY_SHOW_MORE),this.hideDialogLogbookShowMore=g(n.DIALOG_LOGBOOK_SHOW_MORE)||M(a.HIDE_DIALOG_LOGBOOK_SHOW_MORE),this.blockOverflow=g(n.OVERFLOW_MOUSE)||M(a.BLOCK_OVERFLOW),this.blockMouse=g(n.MOUSE)||M(a.BLOCK_MOUSE)):this.setOptions(t,!1),(h=this.user.is_admin?t.admin_settings:t.non_admin_settings)&&this.setOptions(h,!0),t.user_settings&&H(t.user_settings).forEach((function(t){H(t.users).some((function(t){return t.toLowerCase()===R.user.name.toLowerCase()}))&&R.setOptions(t,!0)})),(d=this.ignoreMobile?null:t.mobile_settings)&&(u=d.custom_width?d.custom_width:812,window.innerWidth<=u&&this.setOptions(d,!0)),(l=this.ignoreEntity?null:t.entity_settings)&&l.forEach((function(t){var e=Object.keys(t.entity)[0];window.kioskModeEntities[i].includes(e)||window.kioskModeEntities[i].push(e),R.ha.hass.states[e].state==t.entity[e]&&R.setOptions(t,!1)})),M(a.DISABLE_KIOSK_MODE)&&!this.ignoreDisableKm?[2]:(this.insertStyles(),[2])}var N}))}))},t.prototype.insertStyles=function(){if(this.hideHeader?(f(B.HEADER,this.huiRoot),M(a.CACHE)&&C(n.HEADER,l)):G(this.huiRoot),this.hideSidebar?(f(B.SIDEBAR,this.drawerLayout),f(B.ASIDE,this.drawerLayout.shadowRoot),M(a.CACHE)&&C(n.SIDEBAR,l)):(G(this.drawerLayout),G(this.drawerLayout.shadowRoot)),this.hideAccount||this.hideNotifications||this.hideMenuButton){var t=[this.hideAccount?B.ACCOUNT:"",this.hideNotifications?B.NOTIFICATIONS:"",this.hideAccount&&this.hideNotifications?B.DIVIDER:"",this.hideAccount||this.hideNotifications?B.PEPER_LISTBOX(this.hideAccount,this.hideNotifications):"",this.hideMenuButton?B.MENU_BUTTON:""];f(t.join(""),this.sideBarRoot),this.hideAccount&&M(a.CACHE)&&C(n.ACCOUNT,l)}else G(this.sideBarRoot);if(this.hideSearch||this.hideAssistant||this.hideRefresh||this.hideUnusedEntities||this.hideReloadResources||this.hideEditDashboard||this.hideMenuButton||this.hideOverflow||this.blockOverflow||this.hideSidebar){t=[this.hideSearch?B.SEARCH:"",this.hideAssistant?B.ASSISTANT:"",this.hideRefresh?B.REFRESH:"",this.hideUnusedEntities?B.UNUSED_ENTITIES:"",this.hideReloadResources?B.RELOAD_RESOURCES:"",this.hideEditDashboard?B.EDIT_DASHBOARD:"",this.hideOverflow?B.OVERFLOW_MENU:"",this.blockOverflow?B.BLOCK_OVERFLOW:"",this.hideMenuButton||this.hideSidebar?B.MENU_BUTTON_BURGER:""];f(t.join(""),this.appToolbar),M(a.CACHE)&&(this.hideSearch&&C(n.SEARCH,l),this.hideAssistant&&C(n.ASSISTANT,l),this.hideRefresh&&C(n.REFRESH,l),this.hideUnusedEntities&&C(n.UNUSED_ENTITIES,l),this.hideReloadResources&&C(n.RELOAD_RESOURCES,l),this.hideEditDashboard&&C(n.EDIT_DASHBOARD,l),this.hideOverflow&&C(n.OVERFLOW,l),this.blockOverflow&&C(n.OVERFLOW_MOUSE,l),this.hideMenuButton&&C(n.MENU_BUTTON,l))}else G(this.appToolbar);this.blockMouse?(f(B.MOUSE,document.body),M(a.CACHE)&&C(n.MOUSE,l)):G(document.body),window.removeEventListener("resize",this.resizeWindowBinded),window.addEventListener("resize",this.resizeWindowBinded),window.dispatchEvent(new Event("resize"))},t.prototype.insertDialogStyles=function(t){return e(this,void 0,void 0,(function(){var i,e=this;return o(this,(function(o){return w((function(){return t.querySelectorAll("".concat(T.HA_DIALOG_HEADER," > ").concat(T.MENU_ITEM))}),(function(t){return!!t}),":scope > ".concat(T.HA_DIALOG_HEADER," > ").concat(T.MENU_ITEM)).then((function(t){b(t,e.menuTranslations)})).catch((function(t){console.warn("".concat(_,": ").concat(E," ").concat(t))})),this.hideDialogHeaderActionItems||this.hideDialogHeaderHistory||this.hideDialogHeaderSettings||this.hideDialogHeaderOverflow?(i=[this.hideDialogHeaderActionItems||this.hideDialogHeaderHistory?B.DIALOG_HEADER_HISTORY:"",this.hideDialogHeaderActionItems||this.hideDialogHeaderSettings?B.DIALOG_HEADER_SETTINGS:"",this.hideDialogHeaderActionItems||this.hideDialogHeaderOverflow?B.DIALOG_HEADER_OVERFLOW:""],f(i.join(""),t),M(a.CACHE)&&(this.hideDialogHeaderActionItems&&C(n.DIALOG_HEADER_ACTION_ITEMS,l),this.hideDialogHeaderHistory&&C(n.DIALOG_HEADER_HISTORY,l),this.hideDialogHeaderSettings&&C(n.DIALOG_HEADER_SETTINGS,l),this.hideDialogHeaderOverflow&&C(n.DIALOG_HEADER_OVERFLOW,l))):G(t),[2]}))}))},t.prototype.insertDialogChildStyles=function(t){return e(this,void 0,void 0,(function(){var i,e=this;return o(this,(function(o){return this.hideDialogHistory||this.hideDialogLogbook||this.hideDialogClimateActions?(i=[this.hideDialogHistory?B.DIALOG_HISTORY:"",this.hideDialogLogbook?B.DIALOG_LOGBOOK:"",this.hideDialogClimateActions?B.DIALOG_CLIMATE_ACTIONS:""],f(i.join(""),t),M(a.CACHE)&&(this.hideDialogHistory&&C(n.DIALOG_HISTORY,l),this.hideDialogLogbook&&C(n.DIALOG_LOGBOOK,l),this.hideDialogClimateActions&&C(n.DIALOG_CLIMATE_ACTIONS,l))):G(t),w((function(){var i;return null===(i=t.querySelector(T.HA_DIALOG_HISTORY))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){e.hideDialogHistoryShowMore?(f(B.DIALOG_SHOW_MORE,t),M(a.CACHE)&&C(n.DIALOG_HISTORY_SHOW_MORE,l)):G(t)})).catch((function(t){})),w((function(){var i;return null===(i=t.querySelector(T.HA_DIALOG_LOGBOOK))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){e.hideDialogLogbookShowMore?(f(B.DIALOG_SHOW_MORE,t),M(a.CACHE)&&C(n.DIALOG_LOGBOOK_SHOW_MORE,l)):G(t)})).catch((function(){})),w((function(){var i;return null===(i=t.querySelector(["".concat(T.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(T.HA_DIALOG_DEFAULT),"".concat(T.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(T.HA_DIALOG_VACUUM),"".concat(T.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(T.HA_DIALOG_TIMER),"".concat(T.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(T.HA_DIALOG_MEDIA_PLAYER)].join(",")))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){if(e.hideDialogAttributes||e.hideDialogTimerActions||e.hideDialogMediaActions){var i=[e.hideDialogAttributes?B.DIALOG_ATTRIBUTES:"",e.hideDialogTimerActions?B.DIALOG_TIMER_ACTIONS:"",e.hideDialogMediaActions?B.DIALOG_MEDIA_ACTIONS:""];f(i.join(""),t),M(a.CACHE)&&(e.hideDialogAttributes&&C(n.DIALOG_ATTRIBUTES,l),e.hideDialogTimerActions&&C(n.DIALOG_TIMER_ACTIONS,l),e.hideDialogMediaActions&&C(n.DIALOG_MEDIA_ACTIONS,l))}else G(t)})).catch((function(){})),w((function(){var i;return null===(i=t.querySelector("".concat(T.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(T.HA_DIALOG_UPDATE)))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){e.hideDialogUpdateActions?(f(B.DIALOG_UPDATE_ACTIONS,t),M(a.CACHE)&&C(n.DIALOG_UPDATE_ACTIONS,l)):G(t)})).catch((function(){})),[2]}))}))},t.prototype.resizeWindow=function(){var t=this;window.clearTimeout(this.resizeDelay),this.resizeDelay=window.setTimeout((function(){t.updateMenuItemsLabels()}),250)},t.prototype.watchDashboards=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName===T.HA_PANEL_LOVELACE&&window.KioskMode.run(t)}))}))},t.prototype.watchMoreInfoDialogs=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName===T.HA_MORE_INFO_DIALOG&&window.KioskMode.runDialogs(t).catch((function(t){return console.warn("".concat(E," ").concat(null==t?void 0:t.message))}))}))}))},t.prototype.watchMoreInfoDialogsContent=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName!==T.HA_DIALOG_MORE_INFO&&t.localName!==T.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK||window.KioskMode.runDialogsChildren(t).catch((function(t){return console.warn("".concat(E," ").concat(null==t?void 0:t.message))}))}))}))},t.prototype.updateMenuItemsLabels=function(){var t=this;this.menuTranslations&&(w((function(){return t.appToolbar.querySelectorAll("".concat(T.TOOLBAR," > ").concat(T.ACTION_ITEMS," > ").concat(T.MENU_ITEM))}),(function(t){return!!t}),":scope > ".concat(T.ACTION_ITEMS," > ").concat(T.MENU_ITEM)).then((function(i){b(i,t.menuTranslations)})).catch((function(t){console.warn("".concat(_,": ").concat(E," ").concat(t))})),this.user.is_admin&&w((function(){return t.appToolbar.querySelectorAll(T.OVERLAY_MENU_ITEM)}),(function(t){return!(!t||!t.length)}),"".concat(T.TOOLBAR," > ").concat(T.OVERLAY_MENU_ITEM)).then((function(i){i.forEach((function(i){if(i&&i.dataset&&!i.dataset.selector){var e=i.textContent.trim();i.dataset.selector=t.menuTranslations[e]}}))})).catch((function(t){console.warn("".concat(_,": ").concat(E," ").concat(t))})))},t.prototype.entityWatch=function(){return e(this,void 0,void 0,(function(){var t=this;return o(this,(function(i){switch(i.label){case 0:return[4,window.hassConnection];case 1:return i.sent().conn.subscribeMessage((function(i){return t.entityWatchCallback(i)}),{type:"subscribe_events",event_type:R}),[2]}}))}))},t.prototype.entityWatchCallback=function(t){return e(this,void 0,void 0,(function(){var i;return o(this,(function(e){switch(e.label){case 0:return!(i=window.kioskModeEntities[this.ha.hass.panelUrl]||[]).length||t.event_type!==R||!i.includes(t.data.entity_id)||t.data.old_state&&t.data.new_state.state===t.data.old_state.state?[3,2]:[4,this.run()];case 1:e.sent(),this.runDialogs().catch((function(){})),e.label=2;case 2:return[2]}}))}))},t.prototype.setOptions=function(t,i){a.HIDE_HEADER in t&&(this.hideHeader=t[a.HIDE_HEADER]),a.HIDE_SIDEBAR in t&&(this.hideSidebar=t[a.HIDE_SIDEBAR]),a.HIDE_OVERFLOW in t&&(this.hideOverflow=t[a.HIDE_OVERFLOW]),a.HIDE_MENU_BUTTON in t&&(this.hideMenuButton=t[a.HIDE_MENU_BUTTON]),a.HIDE_ACCOUNT in t&&(this.hideAccount=t[a.HIDE_ACCOUNT]),a.HIDE_NOTIFICATIONS in t&&(this.hideNotifications=t[a.HIDE_NOTIFICATIONS]),a.HIDE_SEARCH in t&&(this.hideSearch=t[a.HIDE_SEARCH]),a.HIDE_ASSISTANT in t&&(this.hideAssistant=t[a.HIDE_ASSISTANT]),a.HIDE_REFRESH in t&&(this.hideRefresh=t[a.HIDE_REFRESH]),a.HIDE_UNUSED_ENTITIES in t&&(this.hideUnusedEntities=t[a.HIDE_UNUSED_ENTITIES]),a.HIDE_RELOAD_RESOURCES in t&&(this.hideReloadResources=t[a.HIDE_RELOAD_RESOURCES]),a.HIDE_EDIT_DASHBOARD in t&&(this.hideEditDashboard=t[a.HIDE_EDIT_DASHBOARD]),a.HIDE_DIALOG_HEADER_ACTION_ITEMS in t&&(this.hideDialogHeaderActionItems=t[a.HIDE_DIALOG_HEADER_ACTION_ITEMS]),a.HIDE_DIALOG_HEADER_HISTORY in t&&(this.hideDialogHeaderHistory=t[a.HIDE_DIALOG_HEADER_HISTORY]),a.HIDE_DIALOG_HEADER_SETTINGS in t&&(this.hideDialogHeaderSettings=t[a.HIDE_DIALOG_HEADER_SETTINGS]),a.HIDE_DIALOG_HEADER_OVERFLOW in t&&(this.hideDialogHeaderOverflow=t[a.HIDE_DIALOG_HEADER_OVERFLOW]),a.HIDE_DIALOG_HISTORY in t&&(this.hideDialogHistory=t[a.HIDE_DIALOG_HISTORY]),a.HIDE_DIALOG_LOGBOOK in t&&(this.hideDialogLogbook=t[a.HIDE_DIALOG_LOGBOOK]),a.HIDE_DIALOG_ATTRIBUTES in t&&(this.hideDialogAttributes=t[a.HIDE_DIALOG_ATTRIBUTES]),a.HIDE_DIALOG_MEDIA_ACTIONS in t&&(this.hideDialogMediaActions=t[a.HIDE_DIALOG_MEDIA_ACTIONS]),a.HIDE_DIALOG_UPDATE_ACTIONS in t&&(this.hideDialogUpdateActions=t[a.HIDE_DIALOG_UPDATE_ACTIONS]),a.HIDE_DIALOG_CLIMATE_ACTIONS in t&&(this.hideDialogClimateActions=t[a.HIDE_DIALOG_CLIMATE_ACTIONS]),a.HIDE_DIALOG_TIMER_ACTIONS in t&&(this.hideDialogTimerActions=t[a.HIDE_DIALOG_TIMER_ACTIONS]),a.HIDE_DIALOG_HISTORY_SHOW_MORE in t&&(this.hideDialogHistoryShowMore=t[a.HIDE_DIALOG_HISTORY_SHOW_MORE]),a.HIDE_DIALOG_LOGBOOK_SHOW_MORE in t&&(this.hideDialogLogbookShowMore=t[a.HIDE_DIALOG_LOGBOOK_SHOW_MORE]),a.BLOCK_OVERFLOW in t&&(this.blockOverflow=t[a.BLOCK_OVERFLOW]),a.BLOCK_MOUSE in t&&(this.blockMouse=t[a.BLOCK_MOUSE]),a.KIOSK in t&&(this.hideHeader=this.hideSidebar=t[a.KIOSK]),i&&(a.IGNORE_ENTITY_SETTINGS in t&&(this.ignoreEntity=t[a.IGNORE_ENTITY_SETTINGS]),a.IGNORE_MOBILE_SETTINGS in t&&(this.ignoreMobile=t[a.IGNORE_MOBILE_SETTINGS]),a.IGNORE_DISABLE_KM in t&&(this.ignoreDisableKm=t[a.IGNORE_DISABLE_KM]))},t}();(new y).log(),Promise.resolve(customElements.whenDefined(T.HUI_VIEW)).then((function(){window.KioskMode=new k}))}();
