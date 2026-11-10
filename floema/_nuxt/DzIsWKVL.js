import{Pn as e,cr as t,pn as n,zn as r}from"./BqI1aal4.js";import{At as i,I as a,N as o,R as s,X as c,Y as l,b as u,f as d,h as f,k as p,m,mt as h,p as g}from"./DqT32Nu_.js";import{Y as _,c as v,et as y,n as b,r as x,s as S,t as C}from"./BDbySAj2.js";import{i as w,m as T,o as E}from"./DEqzV9VW.js";import{t as D}from"./BDNMzG2s.js";import{t as O}from"./Bu2Lhk7L.js";import{a as k,i as A,n as j,o as M,s as N,t as P}from"#entry";import{t as F}from"./CNs_Ozdc.js";import{t as I}from"./Uk9RB6XC.js";import{t as L}from"./BoUdUulG.js";var R={"data-component":`product-page`,class:`inner-page`},z=D({__name:`Product`,props:{metadata:{type:[Boolean,Object],default:!1},sections:{type:[Boolean,Array],default:!1},productSetup:{type:[Boolean,Object],default:!1},sameCollection:{type:[Boolean,Object],default:!1}},setup(e){let n=e,r=O(),{$preview:c}=t(),l=e=>n.sections.find(t=>t._type==e);return o(()=>{}),a(()=>{r.emit(`change-menu-theme`,`main`)}),(t,n)=>(s(),f(`div`,R,[h(c)?(s(),g(h(I),{key:0})):m(``,!0),u(h(N),p({...l(`productDetails`),...e.productSetup},{metadata:e.metadata}),null,16,[`metadata`]),d(`main`,null,[l(`inTheField`)?(s(),g(h(M),i(p({key:0},l(`inTheField`))),null,16)):m(``,!0),l(`integrations`)?.caseStudyList.length>=1?(s(),g(h(k),i(p({key:1},l(`integrations`))),null,16)):m(``,!0),e.sameCollection?(s(),g(h(A),i(p({key:2},e.sameCollection)),null,16)):m(``,!0)]),u(h(S))]))}},[[`__scopeId`,`data-v-ddf3bee3`]]),B=`
"productSetup": productSetup{
	"collection": collection->{
		name,
		"slug":slug.current,
		icon {
			...${P()}
		},
		featuredImage {
			...${P()}
		},
		subCategories[]->{
			name
		}
	},
	"subCollections": subCollections[]->,
	"productType": productType->,
	
	availableColors[]->{
		...,
		image{
			...${P()}
		},
	},
	structureOptions[]->{
		...,
		image{
			...${P()}
		},
	},
	displayOptions[]->{
		...,
		image{
			...${P()}
		},
	},
	availableHPLColors[]->{
		...,
		image{
			...${P()}
		},
	},
	uniqueSize{
		name,
		dimensions,
		printingArea,
		technicalImage {
			...${P()}
		},
	},
	availableSizes[]{
		name,
		label,
		dimensions,
		printingArea,
		technicalImage {
			...${P()}
		},
	},
}
`;function V(e){return`
	_type == "productDetails" => {
		title,
		description,

		"mainImage":modelObjectRef->mainImage{
			...${P()}
		},
		"modelFile":modelObjectRef->modelFile{
			'asset': asset->.url, 
			scene
		},
		"productImages":modelObjectRef->productImages{
			images[]{
				...${P()}
			},
		},

		additionalSpecifications,
		productReferences,
		'productFiles':  *[_type match 'sharedContent' && lang == '${e}'][0].fileRequest{
			title,
			buttonLabel,
			filesDescription,
			privacyText,
			privacyPage->{
				lang,
				metadata
			}
		},
		additionalLinks[]{
			...,
			details[]{
				...,
				_type == 'block' => {
					...,
					markDefs[]{
						...,
						"to": select(
							_type == "internalLink" && defined(href._ref) => href->metadata.slug.current,
							_type == "href" => null,
							defined(to._ref) => to->metadata.slug.current,
							to
						),
						"href": select(
							_type == "href" => to,
							_type == "fileLink" => file.asset->url,
							_type == "internalLink" => null,
							href
						)
					}
				},
			}
		},
	}
`}var H=`
	_type == "inTheField" => {
		title,
		images[]{
		 ...${P()}
		},
		${j()},
}
`,U=`
	_type == "integrations" => {
		title,
		caseStudyList[]->{
			metadata{
				"slug":slug.current
			},
			presentation{
				title,
				description,
				date,
				"category": category->{
					name,
					"slug": slug.current
				},
				${j()},
			}
		},
	}
`,W=L();function G(e){return`
	"sameCollection": {
		"productList": coalesce(
			productList[]->{${W}}, 
			*[_type == "page.product" && productSetup.collection._ref == ^.productSetup.collection._ref && lang == '${e}' && !(_id in path("drafts.**"))]{${W}}
  		)
	}
`}function K(e,t=`pt`){return b`
	*[_type == 'page.product' && metadata.slug.current == "${e}" && lang == '${t}' && !(_id in path("drafts.**"))][0] {
		_type,
		"metadata": metadata{...${C({includeStructuredData:!0})}},
		"sections": sections[] {
			_type,
			${V(t)},
			${H},
			${U},
		},
		${B},
		${G(t)},

	}
	`}var q={__name:`[slug]`,async setup(t){let a,o,{locales:u,locale:d,setLocale:f}=T(),{slug:b}=r().params,S=K(b,d.value),{data:C,pending:D,error:O}=([a,o]=l(()=>x(S)),a=await a,o(),a);if(O.value)throw e({statusCode:O.value?.statusCode||500,statusMessage:O.value?.message||`An error occurred`});!D.value&&C.value;let k=([a,o]=l(()=>w({page:C.value,locale:d})),a=await a,o(),a);E(C.value.metadata,d,k,{pageType:C.value._type}),F({pageTransition:v});let{onEnter:A,onLeave:j}=y();return n({bodyAttrs:{class:C.value.metadata.slug}}),(e,t)=>(s(),g(h(_),{slug:h(C).metadata.slug,name:h(C).metadata.name,metadata:h(C).metadata,"transition-enter":h(A),"transition-leave":h(j)},{default:c(()=>[h(C)?(s(),g(h(z),i(p({key:0},h(C))),null,16)):m(``,!0)]),_:1},8,[`slug`,`name`,`metadata`,`transition-enter`,`transition-leave`]))}};export{q as default};