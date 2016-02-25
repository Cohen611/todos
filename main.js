/*var count =$('#addListItems'); can not get to work*/
$(document).ready(function(){
});

function addListItem() {
  var text = $('#new-text').val();
  $(".todolist").append('<li><input type ="checkbox" class="done"/> '+text+'<button class="delete">Delete</button></li>');
  $("#new-text").val('');

}
function deleteItem(){
  $(".todolist li.open").addClass('deleted');
  deletedItems = deletedItems + 1;
  $("#deletedItems").html(deletedItems + 'deleted');


$(".todolist li.open").removeClass('open');
openItems = openItems - 1;
$("#openItems").html(openItems + 'item');
$(this).parent().remove();
}
function allItems() {
  $(".todolist li.allItems").addClass('all');
  var allItems = allItems - 1;
  $("#allItems").html(allItems + 'all');
  $(".todolist li.allItems").removeClass('all');
  openItems = openItems - 1;
  $("#allItems").html(allItems + 'all');
  $(this).parent().remove();
}
function activeItem(){
  $(".todolist li.active").addClass('active');
activeItems = activeItems + 1;
  $("activeItems").html(activeItems + 'active');
  console.log(activeItems);
}
function finishItem() {
  if ( $(this).parent().css('textDecoration') =='line-through'){
       $(this).parent().css('textDecoration', 'none');
  }else {
    $(this).parent().css('textDecoration', 'line-through');
  }
  $(".todolist li.open").removeClass('open');
  openItems = openItems - 1;
$("#openItems").html(openItems + 'item');
}
var openItems = $(".todolist li.open").length;
var deletedItems = $(".todolist li.deleted").length;
var finishedItems = $(".todolist li.finished").length;
var allItems = $(".todolist li.all").length;
var activeItems = $(".todolist li.active").length;
$("#openItems").prepend(openItems + ' ');
$("#deletedItems").prepend(deletedItems + ' ');
$("#allItems").prepend(allItems + ' ');
$("#activeItems").prepend(activeItems + ' ');
/* Item Count ---Does not work----

var listItems = $("<li>").children();
var count = listItems.length;
$("<li>").append("<li>.length");*/


/* Item Count --- Can not get this to work---

function itemCount(){
var itemCount = $('#new-text').val();
$(".checkbox").append('<li><input type ="checkbox" class="done"/> '+text+'<button class="delete">Delete</button></li>');
$(".checkbox").val('');*/




$(function(){
  $('#add').on('click', addListItem);



    $(document).on('click','.delete',deleteItem);
    $(document).on('click','.done',finishItem);


});
// Prevent the form from submitting
