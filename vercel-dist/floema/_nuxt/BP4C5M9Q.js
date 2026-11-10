const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./x9jeGj1s.js","./DqT32Nu_.js","./BDNMzG2s.js","./CPgxHR8C.js","./DhBWUji4.js","./Images.B-BZxPRM.css","./DqzHLJb3.js","./ShadowsPortal.CgH3YUsE.css"])))=>i.map(i=>d[i]);
import{r as e}from"./XKyaHtl9.js";import{A as t,Pn as n,pn as r}from"./BqI1aal4.js";import{At as i,D as a,I as o,M as s,Mt as c,N as l,R as u,V as d,X as f,Y as p,b as m,f as h,h as g,i as _,jt as v,k as y,kt as b,m as x,mt as S,p as C,st as w,w as T,x as E,y as D}from"./DqT32Nu_.js";import{t as O}from"./HclGiUj8.js";import{C as k,D as A,G as j,H as M,V as N,Y as P,c as ee,et as te,i as ne,it as F,m as I,n as re,q as L,r as ie,s as ae,t as oe,v as R,x as se}from"./BDbySAj2.js";import{f as z,i as B,m as V,n as H,o as U,u as W}from"./DEqzV9VW.js";import{n as G,r as K,t as ce}from"./2OXQXARf.js";import{t as q}from"./BDNMzG2s.js";import{t as J}from"./CPgxHR8C.js";import{t as Y}from"./CHE2-zLL.js";import{t as le}from"./Bu2Lhk7L.js";import{n as X,r as ue,t as Z}from"#entry";import{t as de}from"./CNs_Ozdc.js";var fe=e(W()),pe={class:`g-row`},me={class:`g-col xxl-14 sm-22`},he={class:`-title-2-medium title`},ge={class:`floating-images`},_e=q({__name:`Intro`,props:{title:{type:[Boolean,String],default:!1},mediaAsset:{type:[Boolean,Array],default:!1}},setup(e){z.registerPlugin(Y);let n=E(()=>O(()=>import(`./x9jeGj1s.js`),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),r=a(`pageContext`),i=w(null),s,d,p,_=()=>{if(!i.value)return;let e=i.value.querySelector(`.title`);d=new Y(e,{type:`lines, words`,linesClass:`line`,wordsClass:`word`,autoSplit:!0}),p=d.lines,z.set(e,{opacity:1}),z.set(p,{yPercent:-100,opacity:0});let t=Array.from(i.value.querySelectorAll(`.slider-image img`));z.set(t,{scale:0,yPercent:60,xPercent:60,opacity:0}),s=z.timeline({paused:!0}),s.to(t,{scale:1,opacity:1,yPercent:0,xPercent:0,duration:.6,stagger:.1,ease:`circ.out`}).to(p,{opacity:1,yPercent:0,opacity:1,stagger:.1,duration:.8,ease:`circ.out`},`-=1`)},v=()=>{if(!i.value)return;s.play();let e=fe.ScrollTrigger.create({trigger:`[data-component="intro"]`,start:`top top`,end:`bottom top`,pin:!0,pinSpacing:!1});l(()=>{e.kill()})};return l(()=>{}),o(()=>{Array.from(i.value.querySelectorAll(`img`)).forEach(e=>{r.$page.loader.deferLoad(F(e))}),r.$page.loader.loaded.then(()=>_()),r.$page.loader.ready.then(()=>v())}),(r,a)=>{let o=t;return u(),g(`header`,{ref_key:`el`,ref:i,"data-component":`intro`},[h(`div`,pe,[h(`div`,me,[h(`h1`,he,c(e.title),1)])]),h(`div`,ge,[m(o,null,{default:f(()=>[m(S(n),{images:e.mediaAsset},null,8,[`images`])]),_:1})])],512)}}},[[`__scopeId`,`data-v-068e8402`]]),ve={class:`content`},ye={class:`title-wrapper`},be={class:`-title-8-medium`},xe={class:`image-wrapper`},Se=q({__name:`Card`,props:{collection:{type:[Boolean,Object],default:!1}},setup(e){let t=H(),n=w(null),r=w(!1);return l(()=>{}),o(()=>{}),(i,a)=>(u(),g(`div`,{ref_key:`el`,ref:n,"data-component":`card`,onMouseenter:a[0]||=e=>r.value=!0,onMouseleave:a[1]||=e=>r.value=!1},[m(S(L),{href:e.collection.catalogue.file,title:`${e.collection.catalogue.smallTitle}`},{default:f(()=>[h(`div`,ve,[h(`div`,ye,[h(`p`,be,c(e.collection.catalogue.smallTitle),1)]),m(S(M),{hover:S(r),label:S(t)(`downloadNow`),size:`small`,icon:`download`,iconPlacement:`front`,class:`button`},null,8,[`hover`,`label`])]),h(`div`,xe,[m(S(j),{asset:e.collection.catalogue.catalogueCover[0],sizes:`xsmall:300px xlarge:500px`},null,8,[`asset`])])]),_:1},8,[`href`,`title`])],544))}},[[`__scopeId`,`data-v-05bb6279`]]),Ce={class:`-body-small-medium main-label`},we={class:`-body-small-medium scroll-label`},Te={class:`media`},Ee={class:`media-inner`},De={class:`g-row`},Oe={class:`upper-content`},ke={class:`-body-small-medium index`},Ae={class:`-body-small-medium collection-upper`},je={class:`lower-content`},Me={class:`title-wrapper`},Ne={class:`-title-4-medium title`},Pe=.25,Q=.05,Fe=-180,Ie=q({__name:`CollectionsCta`,props:{smallTagline:{type:[Boolean,String],default:!1},scrollLabel:{type:[Boolean,String],default:!1},collections:{type:[Boolean,Array],default:!1}},setup(e){z.registerPlugin(J,Y);let t=w(null),n=w(null),r=w(null),i=w([]),s=H(),f=(e,t)=>{e?i.value[t]=e:i.value[t]=null};l(()=>{J.getAll().forEach(e=>e.kill()),b.length&&b.forEach(e=>{try{e.revert()}catch{}})});let p=0,y={index:[],collectionUpper:[],label:[],title:[],button:[],card:[]},b=[],T=null,E=()=>{J.create({trigger:t.value,start:`top top`,end:`bottom bottom`,scrub:!0,onUpdate:e=>{let t=n.value.querySelector(`.progress`);t&&z.set(t,{width:`${e.progress*100}%`})}});let e=t.value,a=r.value.querySelectorAll(`.collection`),o=e=>{Object.values(y).forEach(t=>{let n=t[e];n&&n.pause(0)})};a.forEach(e=>e.classList.remove(`is-active`)),a[0]&&a[0].classList.add(`is-active`),a.forEach((e,t)=>{let n=e.querySelector(`.media`),r=e.querySelector(`.media-inner`),a=e.querySelector(`.g-row`);if(t===0?z.set(n,{css:{"--reveal":`0%`}}):z.set(n,{css:{"--reveal":`100%`}}),r&&z.set(r,{scale:1,y:0}),z.set(e,{opacity:1}),a){z.set(a,{opacity:+(t===0)});let n=e.querySelector(`.index`),r=e.querySelector(`.collection-upper`),o=e.querySelector(`.title`),s=e.querySelector(`.special-button`),c=e.querySelector(`.brochure-card`);if(n&&z.set(n,{autoAlpha:0,yPercent:-100,scaleY:1.5}),s&&z.set(s,{opacity:0,yPercent:35}),c&&z.set(c,{autoAlpha:0}),t!==0&&i.value[t]?.prepare?.(),o){let e=new Y(o,{type:`lines,words`,linesClass:`split-line`,wordsClass:`split-word`});b[t]=e,z.set(e.words,{yPercent:20,opacity:0})}y.index[t]=z.timeline({paused:!0}),n&&y.index[t].to(n,{autoAlpha:1,yPercent:0,scaleY:1,duration:.7,ease:`expo.out`,force3D:!0},0),y.collectionUpper[t]=z.timeline({paused:!0}),r&&y.collectionUpper[t].to(r,{autoAlpha:1,duration:.4,ease:`expo.out`,force3D:!0},0),y.title[t]=z.timeline({paused:!0}),b[t]&&y.title[t].to(b[t].words,{yPercent:0,opacity:1,duration:.8,ease:`expo.out`,stagger:.02},0),y.button[t]=z.timeline({paused:!0}),s&&y.button[t].to(s,{autoAlpha:1,yPercent:0,duration:.4,ease:`power1.out`},`+=0.3`),y.card[t]=z.timeline({paused:!0}),c&&y.card[t].to(c,{autoAlpha:1,duration:.3,ease:`power1.out`},.2),t===0&&(y.index[t]?.progress(1),y.collectionUpper[t]?.progress(1),y.label[t]?.progress(1),y.title[t]?.progress(1),y.button[t]?.progress(1),y.card[t]?.progress(1)),y.collectionUpper[t]?.eventCallback(`onStart`,()=>{i.value[t]?.play?.()}),y.collectionUpper[t]?.eventCallback(`onReverseComplete`,()=>{i.value[t]?.prepare?.()})}}),J.create({trigger:e,start:`top top`,end:`bottom bottom`,scrub:!0,onUpdate:e=>{let t=a.length;if(t<=1)return;let n=1/(t-1),r=Math.round(e.progress/n);if(r=z.utils.clamp(0,t-1,r),a.forEach((t,r)=>{let i=t.querySelector(`.media`),a=t.querySelector(`.media-inner`),o=n*r,s=.15,c=Math.max(0,n*(r-1-s)),l=Math.min(1,n*(r+s)),u=z.utils.clamp(0,1,z.utils.normalize(c,l,e.progress)),d=r===0?0:o-n,f=o+n,p=z.utils.clamp(0,1,z.utils.normalize(d,f,e.progress));if(i&&r!==0){let e=100-u*100;z.set(i,{css:{"--reveal":`${e}%`}})}if(a){let e=1+.030000000000000027*p,t=Fe*p;z.set(a,{scale:e,y:t})}}),r!==p){if(p>=0){let e=a[p],t=e?.querySelector(`.g-row`),n=e?.querySelector(`.g-row .title`);i.value[p]?.prepare?.(),z.killTweensOf([t,n]),t&&z.to(t,{opacity:0,duration:.25,ease:`power1.out`}),n&&z.to(n,{opacity:0,duration:.25,ease:`power1.out`}),y.index[p]?.reverse(),y.collectionUpper[p]?.reverse(),y.title[p]?.reverse(),y.button[p]?.reverse(),y.card[p]?.reverse(),e?.classList.remove(`is-active`)}T&&=(T.kill(),null);let e=r;T=z.delayedCall(Pe,()=>{let t=a[e];t?.classList.add(`is-active`);let n=t?.querySelector(`.g-row`),r=t?.querySelector(`.g-row .title`);i.value[e]?.prepare?.(),z.killTweensOf([n,r]),n&&z.set(n,{opacity:0}),r&&z.set(r,{opacity:0}),n&&z.to(n,{opacity:1,duration:.4,ease:`expo.out`}),r&&z.to(r,{opacity:1,duration:.4,ease:`expo.out`}),o(e),y.index[e]?.restart(!0),y.button[e]?.restart(!0),y.card[e]?.restart(!0),z.delayedCall(Q*2,()=>y.collectionUpper[e]?.restart(!0)),z.delayedCall(Q*2,()=>y.title[e]?.restart(!0))}),p=r}}})},O=a(`pageContext`);return o(()=>{O.$page.loader.ready.then(()=>E())}),(i,a)=>(u(),g(`section`,{ref_key:`el`,ref:t,"data-component":`collections-cta`,style:v({height:(e.collections.length+1)*150+`vh`})},[h(`div`,{ref_key:`lineWrapper`,ref:n,class:`line-wrapper`},[a[1]||=h(`span`,{class:`line`},[h(`span`,{class:`progress`})],-1),h(`p`,Ce,c(S(s)(`madeToLast`)),1),h(`p`,we,[D(c(S(s)(`scrollToExplore`))+` `,1),a[0]||=h(`span`,null,`↓`,-1)])],512),h(`div`,{ref_key:`wrapper`,ref:r,class:`collections-wrapper`},[(u(!0),g(_,null,d(e.collections,(e,t)=>(u(),g(`div`,{class:`collection`,key:t},[h(`div`,Te,[h(`div`,Ee,[m(S(I),{media:e.mediaAsset,sizes:`xsmall:600px medium:1200px xlarge:1700px`},null,8,[`media`])])]),h(`div`,De,[h(`div`,Oe,[h(`p`,ke,`0`+c(t+1),1),h(`p`,Ae,[e.collection?(u(),C(S(se),{key:0,ref_for:!0,ref:e=>f(e,t),collection:e.collection,type:`product`,size:`medium`},null,8,[`collection`])):x(``,!0)])]),h(`div`,je,[h(`div`,Me,[h(`h4`,Ne,c(e.title),1),!e.globalCta.link&&e.globalCta.label?(u(),C(S(N),{key:0,label:e.globalCta?e.globalCta.label:S(s)(`learnMore`),theme:`light`,icon:e.collection.name.toLowerCase(),iconPlacement:`front`,class:`special-button`,to:{name:`products`,query:{collection:e.collection.name}}},null,8,[`label`,`icon`,`to`])):x(``,!0),e.globalCta.link&&e.globalCta.label?(u(),C(S(N),{key:1,label:e.globalCta.label,theme:`light`,icon:e.collection.name.toLowerCase(),iconPlacement:`front`,class:`special-button`,to:{name:`journal-category-slug`,params:{category:e.globalCta.link.category,slug:e.globalCta.link.slug}}},null,8,[`label`,`icon`,`to`])):x(``,!0)])])]),e.collection.catalogue.file?(u(),C(Se,{key:0,class:`brochure-card`,collection:e.collection},null,8,[`collection`])):x(``,!0)]))),128))],512)],4))}},[[`__scopeId`,`data-v-89fcf866`]]),Le={class:`g-row`},Re={class:`g-col xxl-16 sm-24`},ze={class:`tagline-image`},Be={class:`-title-7-medium left-label`},Ve={class:`-title-3-medium title`},He={class:`g-col xxl-8 sm-24`},Ue={class:`content`},We={class:`-body-smaller-medium right-label`},Ge={class:`recent-news`},Ke=q({__name:`CompanyHighlight`,props:{label:{type:[Boolean,String],default:!1},mediaAsset:{type:[Boolean,Object],default:!1},title:{type:[Boolean,String],default:!1},recentArticles:{type:[Boolean,Array],default:!1}},setup(e){z.registerPlugin(J,Y);let t=w(null),n=w(null),r=H(),i,s,p,v,b,x=()=>{let e=t.value.querySelectorAll(`.top-line`),n=t.value.querySelector(`.left-label`),r=t.value.querySelector(`.right-label`),i=t.value.querySelector(`.title`),a=t.value.querySelectorAll(`.article-card`);p=new Y(i,{type:`lines, words`,linesClass:`line`,wordsClass:`word`,autoSplit:!0}),v=p.lines,z.set(i,{opacity:1}),z.set(v,{yPercent:50,opacity:0}),z.set(e,{width:0}),z.set(n,{opacity:0}),z.set(r,{opacity:0}),z.set(i,{opacity:1}),z.set(v,{yPercent:50,opacity:0}),z.set(a,{yPercent:20,opacity:0})},T=()=>{i=z.timeline({paused:!0,delay:.5}),s=J.create({trigger:t.value,start:`top 70%`,toggleActions:`play none none none`,once:!0,onEnter:()=>i.play(0)});let e=t.value.querySelectorAll(`.top-line`),n=t.value.querySelector(`.left-label`),r=t.value.querySelector(`.right-label`);t.value.querySelector(`.title`);let a=t.value.querySelectorAll(`.article-card`);i.to(e,{width:`100%`,stagger:.1,duration:2,ease:`expo.inOut`},`<`),i.to(n,{opacity:1,duration:.7,ease:`circ.out`},`-=2`),i.to(r,{opacity:1,duration:.7,ease:`circ.out`},`<`),i.to(v,{opacity:1,yPercent:0,opacity:1,stagger:.03,duration:.8,ease:`circ.out`},`-=1.6`),i.to(a,{yPercent:0,opacity:1,stagger:.1,duration:.8,ease:`circ.out`},`<`)},E=a(`pageContext`),O=()=>{let e=n.value;if(!e)return;let t=e.getTriggerEl?.();if(!t)return;let r=e.getStart?.()||`70%`;b=J.create({trigger:t,start:`top ${r}`,toggleActions:`play none none none`,once:!0,onEnter:()=>e.play(0)})};return o(()=>{E.$page.loader.loaded.then(()=>x()),E.$page.loader.ready.then(()=>{T(),O()})}),l(()=>{p&&p.revert(),s.kill(),i.kill(),b&&b.kill()}),(i,a)=>(u(),g(`section`,{ref_key:`el`,ref:t,"data-component":`company-highlight`},[h(`div`,Le,[h(`div`,Re,[a[1]||=h(`span`,{class:`top-line`},null,-1),h(`div`,ze,[h(`h4`,Be,c(e.label),1),m(S(R),{ref_key:`highlightImage`,ref:n,controlled:!0,backgroundColor:`stoneBrown800`},{default:f(()=>[m(S(I),{media:e.mediaAsset},null,8,[`media`])]),_:1},512)]),h(`h2`,Ve,[a[0]||=h(`span`,{class:`spacer`},null,-1),D(c(e.title),1)])]),h(`div`,He,[a[2]||=h(`span`,{class:`top-line`},null,-1),h(`div`,Ue,[h(`p`,We,c(S(r)(`recentNews`))+` ↓`,1),h(`div`,Ge,[(u(!0),g(_,null,d(e.recentArticles,(e,t)=>(u(),C(S(k),y({key:t},{ref_for:!0},{...e.presentation,...e.metadata},{class:`article-card`}),null,16))),128))])])])])],512))}},[[`__scopeId`,`data-v-4d2de5ce`]]),qe={class:`g-row`},Je={class:`g-col xxl-24`},Ye={class:`-body-smaller-medium`},Xe={class:`products-wrapper`},Ze=q({__name:`FeaturedProducts`,props:{products:{type:[Boolean,Array],default:!1}},setup(e){let t=H(),n=w(null);return l(()=>{}),o(()=>{}),(r,i)=>(u(),g(`section`,{ref_key:`el`,ref:n,"data-component":`featured-products`},[h(`div`,qe,[h(`div`,Je,[h(`p`,Ye,c(S(t)(`recentAddings`))+` ↓`,1)])]),h(`div`,Xe,[(u(!0),g(_,null,d(e.products,(e,t)=>(u(),g(`div`,{class:`product`,key:t},[m(S(L),{to:{name:`products-category-slug`,params:{category:e.productSetup.collection.slug,slug:e.metadata.slug.current}}},{default:f(()=>[m(S(A),y({ref_for:!0},{...e.sections[0],...e.productSetup},{isFeatured:!0}),null,16)]),_:2},1032,[`to`])]))),128))])],512))}},[[`__scopeId`,`data-v-858d409b`]]),Qe={class:`-body-smaller-medium`},$e={class:`collections-wrapper`},et=[`onMouseenter`,`onMouseleave`],tt={key:0,class:`media-wrapper`},nt={key:1,class:`media-wrapper -nature`},rt={class:`-title-2-medium`},it={class:`-title-2`},at={key:3,class:`media-wrapper`},ot=.14,st=.9,ct=.2,lt=q({__name:`CollectionsOverview`,props:{title:{type:[Boolean,String],default:!1},collections:{type:[Boolean,Array],default:!1}},setup(e){let n=E(()=>O(()=>import(`./DqzHLJb3.js`),__vite__mapDeps([6,1,2,4,7]),import.meta.url));z.registerPlugin(J);let r=G(),i=w(null),s=[],p=[],v=[],y=[],T=[],D=e=>{if(r?.width<K.sm)return;let t=v[e];T[e]&&(T[e].kill(),T[e]=null),t&&(T[e]=z.delayedCall(ct,()=>{t.timeScale(st).restart(!0),T[e]=null}))},k=e=>{if(r?.width<K.sm)return;T[e]&&(T[e].kill(),T[e]=null);let t=v[e];if(t){t.pause(0);let n=y[e];n&&n.length>1&&(z.set(n,{autoAlpha:0}),z.set(n[0],{autoAlpha:1}))}},A=()=>{let e=i.value.querySelectorAll(`.collection`);e.forEach((e,t)=>{let n=z.timeline({paused:!0});s.push(n);let r=J.create({trigger:e,start:`top 80%`,toggleActions:`play none none none`,once:!0,onEnter:()=>s[t].play(0)});p.push(r)}),e.forEach((e,t)=>{let n=s[t];z.set(e,{y:50,autoAlpha:0,pointerEvents:`none`}),n.to(e,{y:0,autoAlpha:1,duration:.8,ease:`power3.out`});let r=e.querySelector(`.media`);r&&(z.set(r,{y:30,autoAlpha:0}),n.to(r,{y:0,autoAlpha:1,duration:.6,ease:`power2.out`,onComplete:()=>{z.set(e,{pointerEvents:`all`})}},`-=0.7`));let i=e.querySelectorAll(`.media`);if(y[t]=i,i.length>1){z.set(i,{autoAlpha:0});let e=z.timeline({paused:!0,repeat:-1,repeatDelay:0,defaults:{ease:`none`}}),n=ot;for(let t=1;t<i.length;t++){let r=i[t-1],a=i[t];e.add(()=>{z.set(a,{autoAlpha:1})}),e.add(()=>{z.set(r,{autoAlpha:0})},`+=0`),e.to({},{duration:n})}e.add(()=>{z.set(i,{autoAlpha:0}),z.set(i[0],{autoAlpha:1})}),e.eventCallback(`onRepeat`,()=>{z.set(i,{autoAlpha:0}),z.set(i[0],{autoAlpha:1})}),v[t]=e}else v[t]=null})},j=a(`pageContext`),M=w();return o(()=>{j.$page.loader.loaded.then(()=>void 0),j.$page.loader.ready.then(()=>A()),z.to(M.value,{yPercent:-20,ease:`none`,scrollTrigger:{trigger:i.value,start:`top bottom`,end:`bottom top`,scrub:!0}})}),l(()=>{p.forEach(e=>e.kill()),s.forEach(e=>e.kill()),v.forEach(e=>e&&e.kill()),T.forEach(e=>e&&e.kill()),T=[],y=[]}),(r,a)=>{let o=t;return u(),g(`section`,{ref_key:`el`,ref:i,"data-component":`collections-overview`},[h(`div`,{ref_key:`shadows`,ref:M,class:`shadows`},[m(o,null,{default:f(()=>[m(S(n),{type:`collections`})]),_:1})],512),h(`p`,Qe,c(e.title),1),h(`div`,$e,[(u(!0),g(_,null,d(e.collections,(e,t)=>(u(),C(S(L),{key:t,to:{name:`products`,query:{collection:e.collectionRef.name}},title:`${e.collectionRef.slug} collection link`},{default:f(()=>[h(`div`,{class:`collection`,onMouseenter:e=>D(t),onMouseleave:e=>k(t)},[t===3?(u(),g(`div`,tt,[(u(!0),g(_,null,d(e.mediaAsset,(e,t)=>(u(),C(S(I),{media:[e],key:t},null,8,[`media`]))),128))])):x(``,!0),m(S(ce),{class:`icon`,slug:e.collectionRef.name.toLowerCase()},null,8,[`slug`]),t===1?(u(),g(`div`,nt,[(u(!0),g(_,null,d(e.mediaAsset,(e,t)=>(u(),C(S(I),{media:[e],key:t},null,8,[`media`]))),128))])):x(``,!0),h(`h3`,rt,c(e.collectionRef.name),1),t===0||t===4?(u(),g(`div`,{key:2,class:b([`media-wrapper`,t===4?`-details`:``])},[(u(!0),g(_,null,d(e.mediaAsset,(e,t)=>(u(),C(S(I),{media:[e],key:t},null,8,[`media`]))),128))],2)):x(``,!0),h(`h3`,it,`(`+c(String(e.collectionRef.count).padStart(2,`0`))+`)`,1),t===2?(u(),g(`div`,at,[(u(!0),g(_,null,d(e.mediaAsset,(e,t)=>(u(),C(S(I),{media:[e],key:t},null,8,[`media`]))),128))])):x(``,!0)],40,et)]),_:2},1032,[`to`,`title`]))),128))])],512)}}},[[`__scopeId`,`data-v-182574ae`]]),ut={class:`g-row`},dt={class:`g-col xxl-14 sm-24 left-col`},ft={class:`top-row`},pt={class:`author-wrapper`},mt={class:`name-role`},ht={class:`-title-8-medium`},gt={class:`-title-9-medium`},_t={class:`description`},vt={class:`-title-9-medium`},yt={class:`quote-wrapper`},bt={class:`-title-2-medium quote`},xt={class:`g-col xxl-10 sm-24`},St={class:`-body-medium label`},Ct=q({__name:`LeadershipHighlight`,props:{description:{type:[Boolean,String],default:!1},quote:{type:[Boolean,String],default:!1},author:{type:[Boolean,Object],default:!1},mediaAsset:{type:[Boolean,Object],default:!1},button:{type:[Boolean,Object],default:!1}},setup(e){z.registerPlugin(J,Y);let t=w(null),n=w(null),r=w(null),i,s,d,p,_=()=>{i=z.timeline({paused:!0}),s=J.create({trigger:t.value,start:`top 70%`,toggleActions:`play none none none`,once:!0,onEnter:()=>i.play(0)});let e=t.value.querySelector(`.section-bg`),n=t.value.querySelector(`.name-role`),r=t.value.querySelector(`.description`),a=t.value.querySelector(`.image-wrapper .label`),o=t.value.querySelector(`.quote`),c=t.value.querySelector(`.button`);d=new Y(o,{type:`lines, words`,linesClass:`line`,wordsClass:`word`,autoSplit:!0}),p=d.lines,z.set(o,{opacity:1}),z.set(p,{yPercent:50,opacity:0}),z.set(e,{scaleY:0}),z.set(n,{yPercent:10,opacity:0}),z.set(r,{yPercent:30,opacity:0}),z.set(a,{opacity:0}),z.set(c,{yPercent:100,opacity:0})},v=()=>{let e=t.value.querySelector(`.section-bg`),a=t.value.querySelector(`.name-role`),o=t.value.querySelector(`.description`),s=t.value.querySelector(`.image-wrapper .label`),c=t.value.querySelector(`.button`),l=n.value?.getTimeline(),u=r.value?.getTimeline();i.to(e,{scaleY:1,duration:.7,ease:`power1.out`}),l&&i.add(l,`-=0.3`),i.to(a,{opacity:1,yPercent:0,duration:.7,ease:`circ.out`},`<`),i.to(o,{opacity:.7,yPercent:0,duration:.7,ease:`circ.out`},`<`),u&&i.add(u,`<`),i.to(s,{opacity:1,duration:.7,delay:.5,ease:`circ.out`},`-=0.5`),i.to(p,{opacity:1,yPercent:0,opacity:1,stagger:.06,duration:.8,ease:`circ.out`},`-=1`),i.to(c,{opacity:1,yPercent:0,duration:1,ease:`circ.out`},`<`)},y=a(`pageContext`);return o(()=>{y.$page.loader.loaded.then(()=>_()),y.$page.loader.ready.then(()=>v())}),l(()=>{d&&d.revert(),s.kill(),i.kill()}),(i,a)=>(u(),g(`section`,{ref_key:`el`,ref:t,"data-component":`leadership-highlight`},[a[0]||=h(`span`,{class:`section-bg`},null,-1),h(`div`,ut,[h(`div`,dt,[h(`div`,ft,[h(`div`,pt,[m(S(R),{ref_key:`authorImage`,ref:n,controlled:!0,backgroundColor:`yellow`},{default:f(()=>[m(S(I),{media:e.author.mediaAsset},null,8,[`media`])]),_:1},512),h(`div`,mt,[h(`p`,ht,c(e.author.name),1),h(`p`,gt,c(e.author.role),1)])]),h(`div`,_t,[h(`p`,vt,c(e.description),1)])]),h(`div`,yt,[h(`h2`,bt,`"`+c(e.quote)+`"`,1),e.button.label&&e.button.slug?(u(),C(S(M),{key:0,class:`button`,label:e.button.label,size:`medium`,icon:`arrow-right`,type:`internal`,to:`/${e.button.slug}`},null,8,[`label`,`to`])):x(``,!0)])]),h(`div`,xt,[m(S(R),{ref_key:`mainImage`,ref:r,controlled:!0,backgroundColor:`yellow`},{default:f(()=>[m(S(I),{media:e.mediaAsset},null,8,[`media`]),h(`p`,St,c(e.mediaAsset[0].alt),1)]),_:1},512)])])],512))}},[[`__scopeId`,`data-v-4e02a2c2`]]),wt={class:`g-row`},Tt={class:`inner`},Et={class:`text-content`},$={class:`-title-8-medium title`},Dt={class:`-body-big-medium description`},Ot=q({__name:`WorkflowOverview`,props:{workflow:{type:[Boolean,Array],default:!1}},setup(e){z.registerPlugin(J);let t=w(null),n=w([]),r,i,s=()=>{t.value.querySelectorAll(`.inner`).forEach((e,t)=>{z.set(e,{opacity:0,yPercent:40*(t+1)})})},p=()=>{r=z.timeline({paused:!0,delay:.5}),i=J.create({trigger:t.value,start:`top 70%`,toggleActions:`play none none none`,once:!0,onEnter:()=>r.play(0)});let e=t.value.querySelectorAll(`.inner`),a=n.value.map(e=>e?.getTimeline?.()).filter(Boolean);r.to(e,{opacity:1,yPercent:0,duration:1,stagger:.05,ease:`circ.out`}),a.length&&(r.addLabel(`image-reveal`,`-=0.6`),a.forEach((e,t)=>{r.add(e,`image-reveal+=${t*.1}`)}))},v=a(`pageContext`);return o(()=>{v.$page.loader.loaded.then(()=>s()),v.$page.loader.ready.then(()=>p())}),l(()=>{i.kill(),r.kill()}),(r,i)=>(u(),g(`section`,{ref_key:`el`,ref:t,"data-component":`workflow-overview`},[h(`div`,wt,[(u(!0),g(_,null,d(e.workflow,(e,t)=>(u(),g(`div`,{class:`g-col xxl-8 sm-24`,key:t},[h(`div`,Tt,[m(S(R),{ref_for:!0,ref_key:`imageReveals`,ref:n,controlled:!0,backgroundColor:`yellow`},{default:f(()=>[m(S(I),{media:e.mediaAsset},null,8,[`media`])]),_:2},1536),h(`div`,Et,[h(`p`,$,c(e.title),1),h(`p`,Dt,c(e.description),1)])])]))),128))])],512))}},[[`__scopeId`,`data-v-83a649a5`]]),kt={"data-component":`home-page`,class:`inner-page`},At={class:`bottomGroup`},jt={class:`bottomGroupCanvasContainer`},Mt=q({__name:`Home`,props:{metadata:{type:[Boolean,Object],default:!1},sections:{type:[Boolean,Array],default:!1}},setup(e){let n=E(()=>O(()=>import(`./DqzHLJb3.js`),__vite__mapDeps([6,1,2,4,7]),import.meta.url)),r=e;le();let i=e=>r.sections.find(t=>t._type==e);return l(()=>{}),s(()=>{}),o(()=>{}),(e,r)=>{let a=t;return u(),g(`div`,kt,[m(S(_e),y(i(`intro`),{"data-section-intersect":`dark`}),null,16),h(`main`,null,[m(S(Ie),y(i(`collectionsCta`),{"data-section-intersect":`light`}),null,16),m(S(Ke),y(i(`companyHighlight`),{"data-section-intersect":`dark`}),null,16),m(S(Ze),y(i(`featuredProducts`),{"data-section-intersect":`dark`}),null,16),m(S(lt),y(i(`collectionsOverview`),{"data-section-intersect":`dark`}),null,16),m(S(Ct),y(i(`leadershipHighlight`),{"data-section-intersect":`fluor`}),null,16),h(`div`,At,[h(`data`,jt,[m(a,null,{default:f(()=>[m(S(n),{type:`madeToLast`})]),_:1})]),m(S(Ot),y(i(`workflowOverview`),{"data-section-intersect":`dark`}),null,16),m(S(ne),y(i(`lowerTagline`),{"data-section-intersect":`dark`}),null,16)])]),m(S(ae))])}}},[[`__scopeId`,`data-v-8bba1744`]]),Nt=`
	_type == "intro" => {
		title,
		${X()},
	}
`,Pt=`
	_type == "collectionsCta" => {
		smallTagline,
		scrollLabel,
		collections[]{
			collection->{
				name,
				"icon": icon.asset->.url,
				catalogue {
					"file": file.asset->.url,
					smallTitle,
					${ue(`catalogueCover`)},
				}
			},
			title,
			${X()},

			globalCta{
				label,
				"link": link[0]{
					_type,
					url,
					"document": ^.link[0]->._type,
					"slug": "/" + ^.link[0]->metadata.slug.current,
					"category": ^.link[0]->.presentation.category->.slug.current,
					"lang":  ^.link[0]->.lang,
				}
			}

		},
	}
`,Ft=`
	_type == "companyHighlight" => {
		label,
		${X()},
		title,
		recentArticles[]->{
			metadata {
				"slug": slug.current
			},
			presentation {
				title,
				description,
				date,
				"category": category->{ 
					name,
					"slug": slug.current
				},
				${X()}
			}

		},
	}
`,It=`
	_type == "featuredProducts" => {
		products[]->{
			...,
			"sections": sections[]{
				_type == "productDetails" => {
					title,

					"mainImage": modelObjectRef->mainImage{
						...${Z()}
					},

				},
			},
			"productSetup": productSetup{
					"collection": collection->{
						name,
						"slug":slug.current,
						icon {
							...${Z()}
						},
						featuredImage {
							...${Z()}
						},
						subCategories[]->{
							name
						}
					},

					"subCollection": subCollection->,

					availableColors[]->{
						...,
						image{
							...${Z()}
						},
					},
					availableMaterials[]->{
						...,
						image{
							...${Z()}
						},
					},
					availableSizes[]{
						name,
						label,
						dimensions,
						technicalImage {
							...${Z()}
						},
					},
				}
		},
	}
`;function Lt(e=`pt`){return`
	_type == "collectionsOverview" => {
		title,
		collections[]{
			collectionRef->{
				_id,
				name,
				icon,
				'slug':slug.current,
				"count": count(*[
					_type == "page.product"
					&& !(_id in path("drafts.**"))
					&& productSetup.collection._ref == ^._id
					&& lang == '${e}'
				])
			},
			${X()},
		}
	}
`}var Rt=`
	_type == "leadershipHighlight" => {
		author {
			${X()},
			name,
			role,
		},
		description,
		quote,
		button {
			label,
			"slug": page->{
				"slug": metadata.slug.current
			}.slug
		},
		${X()},
	}
`,zt=`
	_type == "workflowOverview" => {
		workflow[]{
			${X()},
			title,
			description,
		}
	}
`,Bt=`
	_type == "lowerTagline" => {
     	title,
    }
`;function Vt(e=`pt`){return re`
	*[_type == 'page.home' && !(_id in path("drafts.**")) && lang == '${e}'][0] {
		_type,
		"metadata": metadata{...${oe({includeStructuredData:!0})}},
		"sections": sections[] {
			_type,
			${Nt},
			${Pt},
			${Ft},
			${It},
			${Lt(e)},
			${Rt},
			${zt},
			${Bt},
		},
	}
	`}var Ht=q({__name:`index`,async setup(e){let t,a,{locales:o,locale:s,setLocale:c}=V(),l=Vt(s.value),{data:d,error:h}=([t,a]=p(()=>ie(l)),t=await t,a(),t);if(h.value)throw n({statusCode:h.value?.statusCode||500,statusMessage:h.value?.message||`An error occurred`});if(!d.value)throw n({statusCode:404,statusMessage:`Page not found`});let g=([t,a]=p(()=>B({page:d.value,locale:s})),t=await t,a(),t);U(d.value.metadata,s,g,{pageType:d.value._type}),de({pageTransition:ee});let{onEnter:_,onLeave:v}=te();return r({bodyAttrs:{class:d.value.metadata.slug.current}}),(e,t)=>(u(),C(S(P),{slug:S(d).metadata.slug,name:S(d).metadata.name,metadata:S(d).metadata,"transition-enter":S(_),"transition-leave":S(v)},{default:f(()=>[m(S(Mt),i(T(S(d))),null,16)]),_:1},8,[`slug`,`name`,`metadata`,`transition-enter`,`transition-leave`]))}},[[`__scopeId`,`data-v-64bff1b9`]]);export{Ht as default};