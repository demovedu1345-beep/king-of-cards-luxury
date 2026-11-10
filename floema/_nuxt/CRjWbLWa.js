import{Pn as e,cr as t,pn as n,zn as r}from"./BqI1aal4.js";import{At as i,I as a,N as o,R as s,X as c,Y as l,b as u,f as d,h as f,k as p,m,mt as h,p as g,st as _,w as v}from"./DqT32Nu_.js";import{Y as y,c as b,d as x,et as S,f as C,n as w,p as T,r as E,s as D,t as O}from"./BDbySAj2.js";import{i as k,m as A,o as j}from"./DEqzV9VW.js";import{t as M}from"./BDNMzG2s.js";import{t as N}from"./Bu2Lhk7L.js";import{t as P}from"./BGV7hRp8.js";import{n as F}from"#entry";import{t as I}from"./CNs_Ozdc.js";import{t as L}from"./Uk9RB6XC.js";var R={"data-component":`article-page`,class:`inner-page`},z=M({__name:`Article`,props:{metadata:{type:[Boolean,Object],default:!1},sections:{type:[Boolean,Array],default:!1},gallery:{type:[Boolean,Object],default:!1}},setup(e){let{$preview:n}=t(),r=N(),c=_(!1);r.on(`gallery-open`,()=>l()),r.on(`gallery-close`,()=>l());function l(){c.value=!c.value}o(()=>{}),a(()=>{r.emit(`change-menu-theme`,`main`)});let{onEnter:y,onLeave:b}=S();return(t,r)=>(s(),f(`div`,R,[h(n)?(s(),g(h(L),{key:0})):m(``,!0),h(c)?(s(),g(h(x),i(p({key:1},e.gallery)),null,16)):m(``,!0),u(h(T),i(v({...e.sections[0],...e.gallery})),null,16),d(`main`,null,[u(h(C),i(v(e.sections[1])),null,16)]),u(h(D))]))}},[[`__scopeId`,`data-v-76af37bf`]]),B=`
	_type == "articleHeader" => {
		"category": ^.presentation.category->{
			name,
			"slug": slug.current
		},
		title,
		"date": ^.presentation.date,
		figure {
			...,
			${F()}
		},
		"readTime": ^.sections[1]{
			"time":round(length(pt::text(content)) / 5 / 180 ),
		}.time
	}
`,V=`
	_type == "articleContent" => {
		"type": ^._type,
		"readingTime": round(length(pt::text(content)) / 5 / 180 ),
		content[]{
			...,
			_type == 'block' => {
				...,
				markDefs[]{
					...,
					...${P()}
				}
			},
			_type == "figure" => {
				...,
				${F()}
			},
			_type == "figureSet" => {
				...,
				figures[]{
					...,
					${F()}
				}
			},
		}
	}
`,H=`
	gallery {
		title,
		images[]{
			description,
			${F()}
		}
	}
`;function U(e,t=`pt`){return w`
	*[_type == 'page.article' && metadata.slug.current == "${e}" && lang == '${t}' && !(_id in path("drafts.**"))][0] {
		_type,
		_createdAt,
		_updatedAt,
		"metadata": metadata{...${O({includeStructuredData:!0})}},
		"sections": sections[] {
			_type,
			${B},
			${V},
		},
		"gallery": ${H}
	}
	`}var W={__name:`[slug]`,async setup(t){let a,o,{locales:u,locale:d,setLocale:f}=A(),{slug:_}=r().params,v=U(_,d.value),{data:x,pending:C,error:w}=([a,o]=l(()=>E(v)),a=await a,o(),a);if(w.value)throw e({statusCode:w.value?.statusCode||500,statusMessage:w.value?.message||`An error occurred`});!C.value&&x.value;let T=([a,o]=l(()=>k({page:x.value,locale:d})),a=await a,o(),a);j(x.value.metadata,d,T,{pageType:x.value._type}),I({pageTransition:b});let{onEnter:D,onLeave:O}=S();return n({bodyAttrs:{class:x.value.metadata.slug}}),(e,t)=>(s(),g(h(y),{slug:h(x).metadata.slug,name:h(x).metadata.name,metadata:h(x).metadata,"transition-enter":h(D),"transition-leave":h(O)},{default:c(()=>[h(x)?(s(),g(h(z),i(p({key:0},h(x))),null,16)):m(``,!0)]),_:1},8,[`slug`,`name`,`metadata`,`transition-enter`,`transition-leave`]))}};export{W as default};