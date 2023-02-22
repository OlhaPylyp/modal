/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("const imageArray = [\r\n  {\r\n    preview:\r\n      \"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg\",\r\n    original:\r\n      \"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg\",\r\n    description: \"Hokkaido Flower\",\r\n  },\r\n  {\r\n    preview:\r\n      \"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg\",\r\n    original:\r\n      \"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg\",\r\n    description: \"Container Haulage Freight\",\r\n  },\r\n  {\r\n    preview:\r\n      \"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg\",\r\n    original:\r\n      \"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg\",\r\n    description: \"Aerial Beach View\",\r\n  },\r\n  {\r\n    preview:\r\n      \"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg\",\r\n    original:\r\n      \"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg\",\r\n    description: \"Flower Blooms\",\r\n  },\r\n  {\r\n    preview:\r\n      \"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg\",\r\n    original:\r\n      \"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg\",\r\n    description: \"Alpine Mountains\",\r\n  },\r\n  {\r\n    preview:\r\n      \"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg\",\r\n    original:\r\n      \"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg\",\r\n    description: \"Mountain Lake Sailing\",\r\n  },\r\n  {\r\n    preview:\r\n      \"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg\",\r\n    original:\r\n      \"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg\",\r\n    description: \"Alpine Spring Meadows\",\r\n  },\r\n  {\r\n    preview:\r\n      \"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg\",\r\n    original:\r\n      \"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg\",\r\n    description: \"Nature Landscape\",\r\n  },\r\n  {\r\n    preview:\r\n      \"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg\",\r\n    original:\r\n      \"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg\",\r\n    description: \"Lighthouse Coast Sea\",\r\n  },\r\n];\r\n\r\nconst listGallery = document.querySelector(\".js-gallery\");\r\nconst backdropRef = document.querySelector(\".js-lightbox\");\r\nconst overlayRef = document.querySelector(\".lightbox__overlay\");\r\nconst modalImage = document.querySelector(\".lightbox__image\");\r\nconst modalClose = document.querySelector(\r\n  'button[data-action=\"close-lightbox\"]'\r\n);\r\n\r\nconst addGalleryLayout = imageArray.map((elem) => {\r\n  const elemItem = document.createElement(\"li\");\r\n  elemItem.classList.add(\"gallery__item\");\r\n  const link = document.createElement(\"a\");\r\n  link.setAttribute(\"href\", elem.original);\r\n  link.classList.add(\"gallery__link\");\r\n  const image = document.createElement(\"img\");\r\n  image.classList.add(\"gallery__image\");\r\n  image.setAttribute(\"src\", elem.preview);\r\n  image.setAttribute(\"alt\", elem.description);\r\n  image.setAttribute(\"data-source\", elem.original);\r\n  //  image.dataset.index = images.indexOf(elem);\r\n  elemItem.appendChild(link);\r\n  link.appendChild(image);\r\n  return elemItem;\r\n});\r\nlistGallery.append(...addGalleryLayout);\r\n\r\nlistGallery.addEventListener(\"click\", onImageClick);\r\nfunction onImageClick(event) {\r\n  event.preventDefault();\r\n  if (event.target.nodeName !== \"IMG\") {\r\n    console.log(\"enter\");\r\n    return;\r\n  }\r\n  setUrl(event);\r\n  openModal();\r\n}\r\nfunction setUrl(url) {\r\n  modalImage.src = url.target.dataset.source;\r\n  modalImage.alt = url.target.alt;\r\n}\r\nfunction openModal() {\r\n  backdropRef.classList.add(\"is-open\");\r\n}\r\nfunction clearModal() {\r\n  backdropRef.classList.remove(\"is-open\");\r\n  modalImage.src = \"\";\r\n  modalImage.alt = \"\";\r\n}\r\n// Закрытие модального окна по нажатии на бекдроп\r\nmodalClose.addEventListener(\"click\", clearModal);\r\nfunction onBackdropClick(event) {\r\n  if (event.target === overlayRef) {\r\n    clearModal();\r\n  }\r\n}\r\noverlayRef.addEventListener(\"click\", onBackdropClick);\r\n\r\n// Закрытие модального окна по нажатии Esc\r\nwindow.addEventListener(\"keydown\", closeModalByEscape);\r\nfunction closeModalByEscape(event) {\r\n  if (event.code === \"Escape\") {\r\n    clearModal();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://modal/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;