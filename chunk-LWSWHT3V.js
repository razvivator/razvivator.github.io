import{g as i}from"./chunk-7YRR4ONJ.js";import{bd as o,dd as R,r as n}from"./chunk-RJ2WF6JB.js";var e=function(t){return t.AIR_TRANSPORT="air_transport",t.AMPHIBIANS="amphibians",t.BERRIES="berries",t.CLOCKS="clocks",t.CLOTHES="clothes",t.COLD_LANDS_ANIMALS="cold_lands_animals",t.COLORS="colors",t.DISHES="dishes",t.DOMESTIC_ANIMALS="domestic_animals",t.DOMESTIC_BIRDS="domestic_birds",t.EATABLE_MUSHROOMS="eatable_mushrooms",t.EXOTIC_ANIMALS="exotic_animals",t.EXOTIC_BIRDS="exotic_birds",t.FAMILY="family",t.FISHES="fishes",t.FLOWERS="flowers",t.FOOD="food",t.FRUITS="fruits",t.FURNITURE="furniture",t.GEOMETRIC="geometric",t.HOUSEHOLD_APPLIANCES="household_appliances",t.INSECTS="insects",t.LAND_TRANSPORT="land_transport",t.MUSICAL="musical",t.NATURE="nature",t.PROFESSIONS="professions",t.REPTILES="reptiles",t.SEA_ANIMALS="sea_animals",t.SEASONS="seasons",t.SERVICE_TRANSPORT="service_transport",t.SHOES="shoes",t.SPACE="space",t.TOOLS="tools",t.TOYS="toys",t.TREES="trees",t.UNEATABLE_MUSHROOMS="uneatable_mushrooms",t.VEGETABLES="vegetables",t.VILLAGE="village",t.WATER_TRANSPORT="water_transport",t.WEATHER="weather",t.WILD_ANIMALS="wild_animals",t.WILD_BIRDS="wild_birds",t.WINTER_HOLIDAYS="winter_holidays",t}(e||{});var O=function(t){return t[t.FRUITS__VEGETABLES=`${e.FRUITS}__${e.VEGETABLES}`]="FRUITS__VEGETABLES",t[t.FOOD__DISHES=`${e.FOOD}__${e.DISHES}`]="FOOD__DISHES",t[t.CLOTHES__SHOES=`${e.CLOTHES}__${e.SHOES}`]="CLOTHES__SHOES",t[t.BERRIES__FLOWERS=`${e.BERRIES}__${e.FLOWERS}`]="BERRIES__FLOWERS",t[t.WILD_BIRDS__DOMESTIC_BIRDS=`${e.WILD_BIRDS}__${e.DOMESTIC_BIRDS}`]="WILD_BIRDS__DOMESTIC_BIRDS",t[t.EATABLE_MUSHROOMS__UNEATABLE_MUSHROOMS=`${e.EATABLE_MUSHROOMS}__${e.UNEATABLE_MUSHROOMS}`]="EATABLE_MUSHROOMS__UNEATABLE_MUSHROOMS",t[t.WILD_ANIMALS__DOMESTIC_ANIMALS=`${e.WILD_ANIMALS}__${e.DOMESTIC_ANIMALS}`]="WILD_ANIMALS__DOMESTIC_ANIMALS",t[t.AIR_TRANSPORT__LAND_TRANSPORT=`${e.AIR_TRANSPORT}__${e.LAND_TRANSPORT}`]="AIR_TRANSPORT__LAND_TRANSPORT",t}(O||{});var A=class t{static#t=null;static#S=null;static getAgeId(){return t.#t}static setAgeId(S){t.#t=S}static setAgesConfig(S){t.#S=S}static getAgesConfig(){return t.#S.get(t.#t)}};var l=class t{static#t="../../../assets/themes/";static#S=new n(null);static getChosenThemeSubscription(){return t.#S.asObservable()}static getChosenTheme(){return t.#S.getValue()}static setChosenTheme(S){t.#S.next(S)}static unsetTheme(){t.#S.next(null)}static getIcon(S,r=!1){return`${t.getGameThemeFolder(S,r)}icon.${o.SVG}`}static getBg(S,r=!1){return`${t.getGameThemeFolder(S,r)}bg.${o.JPG}`}static getGameThemesUrl(S=i.chosenGameId,r){let a=r?`_${A.getAgeId()}`:"";return`${i.getGameFolder(S)}themes${a}.${o.JSON}`}static getItemsFolder(S,r,a){let _=t.getChosenSetSegment(a);return`${t.getGameThemeFolder(S,r)}${_?_+"/":""}`}static getItemsUrl(S,r,a){return`${t.getItemsFolder(S,r,a)}items.${o.JSON}`}static getItemImg(S,r,a,_){return`${t.getItemsFolder(r,a,_)}img/${S.id}.${S.ext||o.PNG}`}static getChosenSetSegment(S){return`${S??""}`}static getItemCustomImg(S,r){let a=t.getChosenTheme();return`${t.getGameThemeFolder(a.id,!0)}${r?r+"/":""}img/${S}.${a.customItemImgExt}`}static getTitleSoundUrl(S,r){return`${t.#t}${S}/audio/title/${R.getLang()}/${r}.${o.MP3}`}static getOwnSoundUrl(S,r){return`${t.#t}${S}/audio/own/${r}.${o.MP3}`}static getGameThemeFolder(S,r=!1){return r?t.getCustomGameThemeFolder(S):t.getCommonGameThemeFolder(S)}static getCommonGameThemeFolder(S=t.getChosenTheme().id){return`${t.#t}${S}/`}static getCustomGameThemeFolder(S=t.getChosenTheme().id){return`${i.getGameFolder()}themes/${S}/`}static getGameThemeFolderById(S,r=t.getChosenTheme()){return`${i.getGameFolder(S)}themes/${r.id}/`}static isCommonTheme(S){return S.id.toUpperCase()in e}static isCombinedTheme(S){return S.id.toUpperCase()in O}};export{e as a,A as b,l as c};
