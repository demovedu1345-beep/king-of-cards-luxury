import{t as e}from"#entry";function t(t=``){return`
		_id,
		_type,
		"metadata": metadata{ slug },
		"sections": sections[0...1]{
			_type == "productDetails" => {
				title,
				"mainImage": modelObjectRef->mainImage{
					...${e()}
				},
			},
		},
		"productSetup": productSetup{
			"collection": collection->{
				name,
				"slug":slug.current,
				icon {
					...${e()}
				},
			},
			availableColors[]->{ colorValue },
			availableSizes[]{ label },
			${t}
		}
	`}export{t};