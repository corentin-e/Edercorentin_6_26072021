(this["webpackJsonpfisheye-project"]=this["webpackJsonpfisheye-project"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),o=a(12),n=a.n(o),l=a(41),c=a(4),d=(a(46),a.p+"static/media/logo.2fdcbb03.PNG"),p=(a(47),a(48),a(1)),g=function(e){var t=e.content,a=e.onClick,i=e.isActive;return Object(p.jsxs)("button",{className:"".concat(i?"header__tags-style-active":"header__tags-style"),onClick:function(e){return a&&a(t)},children:["#",t]})},h=a(38),j=a(10),u=function(e){var t=e.tagFilter,a=e.toggleFilter,i=function(e){return t.find((function(t){return t===e}))};return Object(p.jsxs)("div",{className:"header__position-items",children:[Object(p.jsx)(j.b,{to:"/",children:Object(p.jsx)("img",{className:"header__logo-style",src:d,alt:"logo"})}),Object(p.jsx)("div",{className:"header__tags-display",children:Object(p.jsx)("div",{className:"header__tags-position-items",children:h.tags.map((function(e){return Object(p.jsx)(g,{content:e.name,onClick:a,isActive:i(e.name)},e.id)}))})}),Object(p.jsx)("div",{className:"header__title-page",children:"Nos Photographes"})]})},m=a.p+"static/media/logo.2fdcbb03.PNG",_=(a(55),function(){return Object(p.jsx)("div",{className:"header-photographe__position-items",children:Object(p.jsx)(j.b,{to:"/",children:Object(p.jsx)("img",{className:"header-photographe__logo-style",src:m,alt:"logo"})})})}),b=a(15),v=(a(56),function(e){var t=e.tagFilter,a=e.setTagFilter;return Object(p.jsx)("div",{className:"page__table-position",children:b.photographers.map((function(e){return Object(p.jsx)("div",{children:(i=e.tags,t.some((function(e){return i.includes(e)}))||0===t.length?Object(p.jsx)("div",{className:"page__columns-style",children:Object(p.jsx)("div",{className:"page__columns-position",children:Object(p.jsxs)("div",{className:"page__columns-items-position",children:[Object(p.jsx)(j.b,{to:"/photographer/".concat(e.id),children:Object(p.jsx)("div",{className:"page__portrait-style",children:Object(p.jsx)("img",{className:"page__portrait-dimensions",src:"".concat("/Edercorentin_6_26072021","/asset/photos/Photographers/").concat(e.portrait),alt:e.alt})})}),Object(p.jsx)(j.b,{className:"page__name-link-style",to:"/photographer/".concat(e.id),children:Object(p.jsx)("div",{className:"page__name-style",children:e.name})}),Object(p.jsxs)("div",{className:"page__city-style",children:[e.city,", ",e.country]}),Object(p.jsx)("div",{className:"page__citation-style",children:e.tagline}),Object(p.jsxs)("div",{className:"page__price-style",children:[e.price,"\u20ac/jour"]}),Object(p.jsx)("div",{className:"page__tags-style",children:e.tags.map((function(e){return Object(p.jsx)(g,{content:e,setTagFilter:a},e)}))})]})})},"homechild"):Object(p.jsx)("div",{className:"page__columns-style-display"},"home_child"))},e.id);var i}))})}),O=(a(57),a(58),a(59),a(60),function(e){var t=e.photographer,a=e.closeModal,i=s.a.useState(""),r=Object(c.a)(i,2),o=r[0],n=r[1],l=s.a.useState(""),d=Object(c.a)(l,2),g=d[0],h=d[1],j=s.a.useState(""),u=Object(c.a)(j,2),m=u[0],_=u[1];return Object(p.jsx)("div",{className:"form__content-style",children:Object(p.jsxs)("div",{className:"form__header-position-items",children:[Object(p.jsxs)("div",{className:"form__header-title",children:[Object(p.jsxs)("p",{className:"form__details-text-title-style",children:["Contactez ",t.name]}),Object(p.jsx)("button",{"aria-label":"Fermer",className:"close",onClick:a,children:Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x",children:[Object(p.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Object(p.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),Object(p.jsx)("div",{className:"form__content-position-items",children:Object(p.jsxs)("form",{children:[Object(p.jsx)("p",{className:"form__content-text-style",children:"Nom"}),Object(p.jsx)("input",{name:"last_name",className:"form__content-input-style",type:"text",value:o,onChange:function(e){n(e.target.value)}}),Object(p.jsx)("p",{className:"form__content-text-style",children:"Email"}),Object(p.jsx)("input",{name:"email",className:"form__content-input-style",type:"email",value:g,onChange:function(e){h(e.target.value)}}),Object(p.jsx)("p",{className:"form__content-text-style",children:"Votre message"}),Object(p.jsx)("textarea",{name:"message",className:"form__content-input-message-style",type:"textarea",value:m,onChange:function(e){_(e.target.value)}}),Object(p.jsx)("input",{className:"form__btn-submit",type:"button",value:"Envoyer",onClick:function(){console.log("Nom: "+o),console.log("Email: "+g),console.log("Votre message: "+m)}})]})})]})})}),x=a(16),k=a.n(x),f=function(e){var t=e.photographer,a=(e.photosSorted,s.a.useState(!1)),i=Object(c.a)(a,2),r=i[0],o=i[1];function n(){o(!1)}return Object(p.jsxs)("div",{className:"page__button-postion",children:[Object(p.jsx)("button",{className:"page__button-contact-style",onClick:function(){o(!0)},children:"Contactez-moi"}),Object(p.jsx)(k.a,{isOpen:r,onRequestClose:n,contentLabel:"Contact me",className:"modal_responsive",children:Object(p.jsx)(O,{photographer:t,closeModal:n})})]})},y=function(e){var t=e.photographer;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"page__background",children:Object(p.jsxs)("div",{className:"page__items-position",children:[Object(p.jsx)("div",{className:"page__details-block-position",children:Object(p.jsxs)("div",{className:"page__details-block-style",children:[Object(p.jsxs)("div",{className:"page__photographer-block",children:[Object(p.jsx)("div",{className:"page__details-name-style",children:t.name}),Object(p.jsx)(f,{photographer:t})]}),Object(p.jsxs)("div",{className:"page__details-location-style",children:[t.city,", ",t.country]}),Object(p.jsx)("div",{className:"page__details-citation-style",children:t.tagline}),Object(p.jsx)("div",{className:"page__details-tags-style",children:t.tags.map((function(e){return Object(p.jsx)(g,{content:e},e)}))})]})}),Object(p.jsx)("div",{className:"page__details-portrait-style",children:Object(p.jsx)("img",{className:"page__portrait-dimensions",src:"".concat("/Edercorentin_6_26072021","/asset/photos/Photographers/").concat(t.portrait),alt:t.alt})})]})})})},N=a(7),I=(a(70),a(71),a(72),a(40)),C=function(e){var t=e.setActiveFilter,a=[{value:"popularit\xe9",label:"Popularit\xe9",color:"green"},{value:"date",label:"Date"},{value:"titre",label:"Titre"}],i=a.label,r={control:function(e){return Object(N.a)(Object(N.a)({},e),{},{backgroundColor:"brown",width:200,textColor:"white"})},option:function(e,t){return Object(N.a)(Object(N.a)({},e),{},{color:t.isFocused?"black":"white"})},singleValue:function(e){return Object(N.a)(Object(N.a)({},e),{},{color:"white"})},placeholder:function(e){return Object(N.a)(Object(N.a)({},e),{},{color:"white"})},indicatorContainer:function(e){return Object(N.a)(Object(N.a)({},e),{},{color:"white"})},menu:function(e){return Object(N.a)(Object(N.a)({},e),{},{color:"white",backgroundColor:"brown"})}};return Object(p.jsxs)("div",{className:"page__items-filter-position",children:[Object(p.jsx)("label",{className:"page__filter-text",children:"Trier par"}),Object(p.jsx)(I.a,{onChange:function(e){t(e.label)},options:a,value:i,styles:r})]})},S=(a(83),a(84),a(39)),w=(a(90),function(e){var t=e.photos,a=e.carrouselIndex,i=e.isModalOpen;return Object(p.jsx)(S.Carousel,{class:"carousel_style",ariaLabel:!0,selectedItem:a,autoFocus:!1,showThumbs:!1,showStatus:!1,showIndicators:!1,children:t.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"page__image-cadre-carousel-style",children:Object(p.jsx)(SourceOfMedias,{isModalOpen:i,media:e})},e.id),Object(p.jsx)("div",{className:"page__image-carousel-details-title-style",children:e.title})]},e.id)}))})}),P=(a(91),a(17)),A=a.n(P),B=(a(94),function(e){var t=e.media;return e.isModalOpen?Object(p.jsx)("div",{className:"page__under-cadre-style",children:"video"in t?Object(p.jsx)("video",{controls:!0,className:"page__media-style",type:"jpg",src:"".concat("/Edercorentin_6_26072021","/asset/photos/Album/").concat(t.video),alt:t.alt}):Object(p.jsx)("img",{className:"page__media-style",type:"jpg",src:"".concat("/Edercorentin_6_26072021","/asset/photos/Album/").concat(t.image),alt:t.alt})}):Object(p.jsx)("div",{className:"page__under-cadre-style",children:"video"in t?Object(p.jsx)("video",{className:"page__media-style",type:"jpg",src:"".concat("/Edercorentin_6_26072021","/asset/photos/Album/").concat(t.video),alt:t.alt}):Object(p.jsx)("img",{className:"page__media-style",type:"jpg",src:"".concat("/Edercorentin_6_26072021","/asset/photos/Album/").concat(t.image),alt:t.alt})})}),M=function(e){var t=e.media,a=e.incrementGlobalLike,i=e.openModal,s=Object(r.useState)(t.likes),o=Object(c.a)(s,2),n=o[0],l=o[1];return Object(p.jsx)("div",{className:"page__album-grid-position",children:Object(p.jsx)("div",{className:"page__album-grid",children:Object(p.jsxs)("div",{className:"page__album-block-media-items-position",children:[Object(p.jsxs)("div",{className:"page__media-cadre-album-style",onClick:i,children:[Object(p.jsx)(B,{media:t}),"video"in t?Object(p.jsx)("div",{className:"page__position-play-icon-style",children:Object(p.jsx)(A.a,{className:"page__details-play-icon-style",icon:"play",fill:"white",width:"30px"},"icon")}):Object(p.jsx)("div",{className:"page__position-play-icon-style"})]}),Object(p.jsxs)("div",{className:"page__media-details-album-position",children:[Object(p.jsx)("button",{className:"page__media-details-title-style",onClick:i,children:t.title}),Object(p.jsxs)("button",{className:"page__media-details-likes-style",onClick:function(){l(n+1),a()},children:[n,Object(p.jsx)(A.a,{className:"page__details-likes-icon-style",icon:"heart",fill:"brown",width:"15px"},"icon")]})]})]})})},t.title)};a(95);k.a.setAppElement("#root");var T=function(e){var t=e.photosSorted,a=e.photos,o=e.incrementGlobalLike,n=s.a.useState(!1),l=Object(c.a)(n,2),d=l[0],g=l[1],h=Object(r.useState)(0),j=Object(c.a)(h,2),u=j[0],m=j[1],_=function(e){return function(){m(e),g(!0)}};function b(){g(!1)}return Object(p.jsxs)("div",{className:"page__album-grid-style",children:[t.map((function(e,t){return Object(p.jsx)(M,{media:e,incrementGlobalLike:o,openModal:_(t)},e.title)})),Object(p.jsxs)(k.a,{isOpen:d,onRequestClose:b,contentLabel:"Contact me",className:"modal_responsive-carousel",children:[Object(p.jsx)("span",{className:"close_modal-carousel",onClick:b,children:Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"brown",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x",children:[Object(p.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Object(p.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),Object(p.jsx)(w,{isModalOpen:function(){m(i)},carrouselIndex:u,photos:a,closeModal:b})]})]})},W=(a(101),function(e){var t=e.likes,a=e.price;return Object(p.jsxs)("div",{className:"page__infos-band-items-position",children:[Object(p.jsxs)("span",{className:"page__infos-band-like-style",children:[t,Object(p.jsx)(A.a,{className:"page__info-band-icon-style",icon:"heart",fill:"black",width:"15px"})]}),Object(p.jsxs)("span",{className:"page__infos-band-price-style",children:[a,"\u20ac/jour "]})]})}),F=a(3),E=function(){var e=Object(F.f)().id,t=Object(r.useState)("Popularit\xe9"),a=Object(c.a)(t,2),i=a[0],s=a[1],o=b.photographers.find((function(t){return t.id===e})),n=b.media.filter((function(t){return t.photographerId===e})),l=Object(r.useState)(n.reduce((function(e,t){return e+=t.likes}),0)),d=Object(c.a)(l,2),g=d[0],h=d[1],j=n.sort((function(e,t){return"Popularit\xe9"===i?t.likes-e.likes:"Date"===i?t.date-e.date:"Titre"===i?e.title.localeCompare(t.title):j}));return Object(p.jsxs)("div",{className:"page__content-position",children:[Object(p.jsx)(y,{photographer:o}),Object(p.jsx)(C,{activeFilter:i,setActiveFilter:s}),Object(p.jsx)(T,{incrementGlobalLike:function(){h(g+1)},photosSorted:j,photos:n}),Object(p.jsx)(W,{price:o.price,likes:g})]})};var R=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),a=t[0],i=t[1],s=Object(r.useState)(!1),o=Object(c.a)(s,2),n=o[0],d=o[1],g=Object(r.useCallback)((function(){d(!0),window.removeEventListener("scroll",g)}),[]);return Object(r.useEffect)((function(){!1===n&&window.addEventListener("scroll",g)}),[n,g]),Object(p.jsx)("div",{className:"page__position-items",children:Object(p.jsxs)(j.a,{children:[Object(p.jsxs)(F.c,{children:[Object(p.jsxs)(F.a,{path:"/photographer/:id",children:[Object(p.jsx)(_,{}),Object(p.jsx)(E,{})]}),Object(p.jsxs)(F.a,{path:"/",children:[Object(p.jsx)(u,{tagFilter:a,toggleFilter:function(e){var t=a.find((function(t){return t===e}));i(t?function(t){return t.filter((function(t){return t!==e}))}:function(t){return[].concat(Object(l.a)(t),[e])})}}),Object(p.jsx)(v,{tagFilter:a,setTagFilter:i})]})]}),Object(p.jsx)("div",{className:"button-return-top-page__position",children:n&&Object(p.jsx)("button",{"aria-label":"Retour haut de page",className:"button-return-top-page__style",onClick:function(){window.scrollTo({top:0}),d(!1)},children:"Passer au contenu"})})]})})};n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root"))},15:function(e){e.exports=JSON.parse('{"photographers":[{"name":"Mimi Keel","id":"243","city":"London","country":"UK","tags":["portrait","events","travel","animals"],"tagline":"Voir le beau dans le quotidien","price":400,"portrait":"MimiKeel.jpg","likes":200.555,"alt":"Mimi Keel"},{"name":"Ellie-Rose Wilkens","id":"930","city":"Paris","country":"France","tags":["sports","architecture"],"tagline":"Capturer des compositions complexes","price":250,"portrait":"EllieRoseWilkens.jpg","likes":154.468,"alt":"Ellie-Rose Wilkens"},{"name":"Tracy Galindo","id":"82","city":"Montreal","country":"Canada","tags":["art","fashion","events"],"tagline":"Photographe freelance","price":500,"portrait":"TracyGalindo.jpg","likes":154.748,"alt":"Tracy Galindo"},{"name":"Nabeel Bradford","id":"527","city":"Mexico City","country":"Mexico","tags":["travel","portrait"],"tagline":"Toujours aller de l\'avant","price":350,"portrait":"NabeelBradford.jpg","likes":321.456,"alt":"Nabeel Bradford"},{"name":"Rhode Dubois","id":"925","city":"Barcelona","country":"Spain","tags":["sport","fashion","events","animals"],"tagline":"Je cr\xe9e des souvenirs","price":275,"portrait":"RhodeDubois.jpg","likes":456.123,"alt":"Rhode Dubois"},{"name":"Marcel Nikolic","id":"195","city":"Berlin","country":"Germany","tags":["travel","architecture"],"tagline":"Toujours \xe0 la recherche de LA photo","price":300,"portrait":"MarcelNikolic.jpg","likes":654.789,"alt":"Marcel Nikolic"}],"media":[{"id":342550,"photographerId":"82","title":"Fashion Yellow Beach","image":"Fashion_Yellow_Beach.jpg","tags":["fashion"],"likes":62,"date":"2011-12-08","price":55,"alt":"Fashion Yellow Beach"},{"id":8520927,"photographerId":"82","title":"Fashion Urban Jungle","image":"Fashion_Urban_Jungle.jpg","tags":["fashion"],"likes":11,"date":"2011-11-06","price":55,"alt":"Fashion Urban Jungle"},{"id":9025895,"photographerId":"82","title":"Fashion Pattern on a Pattern","image":"Fashion_Pattern_on_Pattern.jpg","tags":["fashion"],"likes":72,"date":"2013-08-12","price":55,"alt":"Fashion Pattern on a Pattern"},{"id":9275938,"photographerId":"82","title":"Wedding Gazebo","image":"Event_WeddingGazebo.jpg","tags":["events"],"likes":69,"date":"2018-02-22","price":55,"alt":"Wedding Gazebo"},{"id":2053494,"photographerId":"82","title":"Sparkles","image":"Event_Sparklers.jpg","tags":["events"],"likes":2,"date":"2020-05-25","price":55,"alt":"Sparkles"},{"id":7324238,"photographerId":"82","title":"18th Anniversary","image":"Event_18thAnniversary.jpg","tags":["events"],"likes":33,"date":"2019-06-12","price":55,"alt":"18th Anniversary"},{"id":8328953,"photographerId":"82","title":"Wooden Horse Sculpture","video":"Art_Wooden_Horse_Sculpture.mp4","tags":["art"],"likes":24,"date":"2011-12-08","price":100,"alt":"Wooden Horse Sculpture"},{"id":7502053,"photographerId":"82","title":"Triangle Man","image":"Art_Triangle_Man.jpg","tags":["art"],"likes":88,"date":"2007-05-07","price":55,"alt":"Triangle Man"},{"id":8523492,"photographerId":"82","title":"Purple Tunnel","image":"Art_Purple_light.jpg","tags":["art"],"likes":24,"date":"2018-05-05","price":55,"alt":"Purple Tunnel"},{"id":75902334,"photographerId":"82","title":"Art Mine","image":"Art_Mine.jpg","tags":["art"],"likes":75,"date":"2019-11-25","price":55,"alt":"Art Mine"},{"id":73852953,"photographerId":"925","title":"8 Rows","image":"Sport_2000_with_8.jpg","tags":["sport"],"likes":52,"date":"2013-02-30","price":70,"alt":"8 Rows"},{"id":92758372,"photographerId":"925","title":"Fashion Wings","image":"Fashion_Wings.jpg","tags":["fashion"],"likes":58,"date":"2018-07-17","price":70,"alt":"Fashion Wings"},{"id":32958383,"photographerId":"925","title":"Melody Red on Stripes","image":"Fashion_Melody_Red_on_Stripes.jpg","tags":["fashion"],"likes":11,"date":"2019-08-12","price":70,"alt":"Melody Red on Stripes"},{"id":928587383,"photographerId":"925","title":"Venture Conference","image":"Event_VentureConference.jpg","tags":["events"],"likes":2,"date":"2019-01-02","price":70,"alt":"Venture Conference"},{"id":725639493,"photographerId":"925","title":"Product Pitch","image":"Event_ProductPitch.jpg","tags":["events"],"likes":3,"date":"2019-05-20","price":70,"alt":"Product Pitch"},{"id":23394384,"photographerId":"925","title":"Musical Festival Keyboard","image":"Event_KeyboardCheck.jpg","tags":["events"],"likes":52,"date":"2019-07-18","price":70,"alt":"Musical Festival Keyboard"},{"id":87367293,"photographerId":"925","title":"Musical Festival Singer","image":"Event_Emcee.jpg","tags":["events"],"likes":23,"date":"2018-02-22","price":70,"alt":"Musical Festival Singer"},{"id":593834784,"photographerId":"925","title":"Animal Majesty","image":"Animals_Majesty.jpg","tags":["animals"],"likes":52,"date":"2017-03-13","price":70,"alt":"Animal Majesty"},{"id":83958935,"photographerId":"925","title":"Cute Puppy on Sunset","video":"Animals_Puppiness.mp4","tags":["animals"],"likes":52,"date":"2016-06-12","price":70,"alt":"Cute Puppy on Sunset"},{"id":394583434,"photographerId":"527","title":"Rock Mountains","video":"Travel_Rock_Mountains.mp4","tags":["travel"],"likes":23,"date":"2017-03-18","price":45,"alt":"Rock Mountains"},{"id":343423425,"photographerId":"527","title":"Outdoor Baths","image":"Travel_Outdoor_Baths.jpg","tags":["travel"],"likes":101,"date":"2017-04-03","price":45,"alt":"Outdoor Baths"},{"id":73434243,"photographerId":"527","title":"Road into the Hill","image":"Travel_Road_into_Hill.jpg","tags":["travel"],"likes":99,"date":"2018-04-30","price":45,"alt":"Road into the Hill"},{"id":23425523,"photographerId":"527","title":"Bridge into the Forest","image":"Travel_Bridge_into_Forest.jpg","tags":["travel"],"likes":34,"date":"2016-04-05","price":45,"alt":"Bridge into the Forest"},{"id":23134513,"photographerId":"527","title":"Boat Wonderer","image":"Travel_Boat_Wanderer.jpg","tags":["travel"],"likes":23,"date":"2017-03-18","price":45,"alt":"Boat Wonderer"},{"id":92352352,"photographerId":"527","title":"Portrait Sunkiss","image":"Portrait_Sunkissed.jpg","tags":["portrait"],"likes":66,"date":"2018-05-24","price":45,"alt":"Portrait Sunkiss"},{"id":34513453,"photographerId":"527","title":"Shaw Potrait","image":"Portrait_Shaw.jpg","tags":["portait"],"likes":52,"date":"2017-04-21","price":45,"alt":"Shaw Potrait"},{"id":23523533,"photographerId":"527","title":"Alexandra","image":"Portrait_Alexandra.jpg","tags":["portait"],"likes":95,"date":"2018-11-02","price":45,"alt":"Alexandra"},{"id":525834234,"photographerId":"527","title":"Afternoon Break","image":"Portrait_AfternoonBreak.jpg","tags":["portait"],"likes":25,"date":"2019-01-02","price":45,"alt":"Afternoon Break"},{"id":623534343,"photographerId":"243","title":"Lonesome","image":"Travel_Lonesome.jpg","tags":["travel"],"likes":88,"date":"2019-02-03","price":45,"alt":"Lonesome"},{"id":625025343,"photographerId":"243","title":"Hillside Color","image":"Travel_HillsideColor.jpg","tags":["travel"],"likes":85,"date":"2019-04-03","price":45,"alt":"Hillside Color"},{"id":2525345343,"photographerId":"243","title":"Wednesday Potrait","image":"Portrait_Wednesday.jpg","tags":["portait"],"likes":34,"date":"2019-04-07","price":45,"alt":"Wednesday Potrait"},{"id":2523434634,"photographerId":"243","title":"Nora Portrait","image":"Portrait_Nora.jpg","tags":["portait"],"likes":63,"date":"2019-04-07","price":45,"alt":"Nora Portrait"},{"id":398847109,"photographerId":"243","title":"Raw Black Portrait","image":"Portrait_Background.jpg","tags":["portait"],"likes":55,"date":"2019-06-20","price":45,"alt":"Raw Black Portrait"},{"id":2534342,"photographerId":"243","title":"Seaside Wedding","image":"Event_SeasideWedding.jpg","tags":["events"],"likes":25,"date":"2019-06-21","price":45,"alt":"Seaside Wedding"},{"id":65235234,"photographerId":"243","title":"Boulder Wedding","image":"Event_PintoWedding.jpg","tags":["events"],"likes":52,"date":"2019-06-25","price":45,"alt":"Boulder Wedding"},{"id":23523434,"photographerId":"243","title":"Benevides Wedding","image":"Event_BenevidesWedding.jpg","tags":["events"],"likes":77,"date":"2019-06-28","price":45,"alt":"Benevides Wedding"},{"id":5234343,"photographerId":"243","title":"Wild Horses in the Mountains","video":"Animals_Wild_Horses_in_the_mountains.mp4","tags":["animals"],"likes":142,"date":"2019-08-23","price":60,"alt":"Wild Horses in the Mountains"},{"id":95234343,"photographerId":"243","title":"Rainbow Bird","image":"Animals_Rainbow.jpg","tags":["animals"],"likes":59,"date":"2019-07-02","price":60,"alt":"Rainbow Bird"},{"id":52343416,"photographerId":"195","title":"Japanese Tower, Kyoto","image":"Travel_Tower.jpg","tags":["travel"],"likes":25,"date":"2019-04-03","price":60,"alt":"Japanese Tower, Kyoto"},{"id":2523434,"photographerId":"195","title":"Senset on Canals, Venice","image":"Travel_SunsetonCanals.jpg","tags":["travel"],"likes":53,"date":"2019-05-06","price":60,"alt":"Senset on Canals, Venice"},{"id":95293534,"photographerId":"195","title":"Mountain and Lake","image":"Travel_OpenMountain.jpg","tags":["travel"],"likes":33,"date":"2019-05-12","price":60,"alt":"Mountain and Lake"},{"id":356234343,"photographerId":"195","title":"City Bike and Stair, Paris","image":"Travel_Bike_and_Stair.jpg","tags":["travel"],"likes":53,"date":"2019-06-20","price":60,"alt":"City Bike and Stair, Paris"},{"id":235234343,"photographerId":"195","title":"Adventure Door, India","image":"Travel_Adventure_Door.jpg","tags":["travel"],"likes":63,"date":"2019-06-26","price":60,"alt":"Adventure Door, India"},{"id":6234234343,"photographerId":"195","title":"Contrast, St Petersburg","image":"Architecture_Contrast.jpg","tags":["architecture"],"likes":52,"date":"2019-06-30","price":60,"alt":"Contrast, St Petersburg"},{"id":6525666253,"photographerId":"195","title":"On a Hill, Tibet","image":"Architecture_On_a_hill.jpg","tags":["architecture"],"likes":63,"date":"2019-07-20","price":60,"alt":"On a Hill, Tibet"},{"id":98252523433,"photographerId":"195","title":"Leaning Tower, Pisa","image":"Architecture_Dome.jpg","tags":["architecture"],"likes":88,"date":"2020-01-05","price":60,"alt":"Leaning Tower, Pisa"},{"id":9259398453,"photographerId":"195","title":"Circle Highways, Buenos Aires","video":"Architecture_coverr_circle_empty.mp4","tags":["architecture"],"likes":57,"date":"2020-01-20","price":65,"alt":"Circle Highways, Buenos Aires"},{"id":3523523534,"photographerId":"195","title":"Corner Building and Blue Sky","image":"Architecture_Corner_Room.jpg","tags":["architecture"],"likes":54,"date":"2020-05-05","price":60,"alt":"Corner Building and Blue Sky"},{"id":952343423,"photographerId":"930","title":"Tricks in the Air","video":"Sport_Tricks_in_the_air.mp4","tags":["sport"],"likes":150,"date":"2018-02-30","price":70,"alt":"Tricks in the Air"},{"id":235234343,"photographerId":"930","title":"Climber","image":"Sport_Next_Hold.jpg","tags":["sport"],"likes":101,"date":"2018-03-05","price":65,"alt":"Climber"},{"id":235343222,"photographerId":"930","title":"Surfer","image":"sport_water_tunnel.jpg","tags":["sport"],"likes":103,"date":"2018-03-10","price":70,"alt":"Surfer"},{"id":7775342343,"photographerId":"930","title":"Skier","image":"Sport_Sky_Cross.jpg","tags":["sport"],"likes":77,"date":"2018-04-16","price":50,"alt":"Skier"},{"id":9253445784,"photographerId":"930","title":"Race End","image":"Sport_Race_End.jpg","tags":["sport"],"likes":88,"date":"2018-04-22","price":65,"alt":"Race End"},{"id":22299394,"photographerId":"930","title":"Jump!","image":"Sport_Jump.jpg","tags":["sport"],"likes":95,"date":"2018-04-27","price":70,"alt":"Jump!"},{"id":3452342633,"photographerId":"930","title":"White Light","image":"Architecture_White_Light.jpg","tags":["architecture"],"likes":52,"date":"2018-05-03","price":75,"alt":"White Light"},{"id":939234243,"photographerId":"930","title":"Water on Modern Building","image":"Architecture_Water_on_Modern.jpg","tags":["architecture"],"likes":55,"date":"2018-05-10","price":72,"alt":"Water on Modern Building"},{"id":222959233,"photographerId":"930","title":"Horseshoe","image":"Architecture_Horseshoe.jpg","tags":["architecture"],"likes":85,"date":"2018-05-15","price":71,"alt":"Horseshoe"},{"id":965933434,"photographerId":"930","title":"Cross Bar","image":"Architecture_Cross_Bar.jpg","tags":["architecture"],"likes":66,"date":"2018-05-20","price":58,"alt":"Cross Bar"},{"id":777723343,"photographerId":"930","title":"Connected Curves","image":"Architecture_Connected_Curves.jpg","tags":["architecture"],"likes":79,"date":"2018-05-21","price":80,"alt":"Connected Curves"}]}')},38:function(e){e.exports=JSON.parse('{"tags":[{"name":"portrait","value":"portrait","id":10534564651235},{"name":"art","value":"art","id":20},{"name":"fashion","value":"fashion","id":30},{"name":"architecture","value":"architecture","id":40},{"name":"travel","value":"travel","id":50},{"name":"sport","value":"sport","id":60},{"name":"animals","value":"animals","id":70},{"name":"events","value":"events","id":80}]}')},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},71:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},91:function(e,t,a){},94:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.e6cb5d74.chunk.js.map