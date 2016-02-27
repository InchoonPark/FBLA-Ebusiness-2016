Template.Gallery.onRendered(() => {
  $('.gallery-popup').magnificPopup({
    type:'image',
    gallery:{
    enabled:true
  }
  });
});

Template.Gallery.helpers({
  galleryPictures() {
    return [
{ _id: 3, type: "catering" },
{ _id: 17, type: "table" },
{ _id: 1, type: "catering" },
{ _id: 2, type: "catering" },
{ _id: 5, type: "decor" },
{ _id: 13, type: "lighting" },
{ _id: 14, type: "lighting" },
{ _id: 15, type: "table" },
{ _id: 16, type: "table" },
{ _id: 12, type: "lighting" },
{ _id: 4, type: "decor" },
{ _id: 6, type: "decor" },
{ _id: 7, type: "decor" },
{ _id: 9, type: "lighting" },
{ _id: 10, type: "lightning" },
{ _id: 11, type: "lighting" },
{ _id: 8, type: "decor" },
{ _id: 18, type: "catering" },
{ _id: 19, type: "decor" },
{ _id: 20, type: "lighting" }
    ];
  }
});
