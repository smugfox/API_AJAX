"use strict";$(document).ready(function(){function a(a){b.append(Mustache.render(e,a))}var b=$("#orders"),c=$("#name"),d=$("#drink"),e=$("#order-template").html();$.ajax({type:"GET",url:"http://rest.learncode.academy/api/learncode/orders",success:function(b){$.each(b,function(b,c){a(c)})},error:function(){alert("error loading orders")}}),$("#add-order").on("click",function(){var b={name:c.val(),drink:d.val()};$.ajax({type:"POST",url:"http://rest.learncode.academy/api/learncode/orders",data:b,success:function(b){a(b)},error:function(){alert("error loading orders")}})}),b.delegate(".remove","click",function(){var a=$(this).closest("li");$.ajax({type:"DELETE",url:"http://rest.learncode.academy/api/learncode/orders/"+$(this).attr("data-id"),success:function(){a.fadeOut(500,function(){$(this).remove()})}})}),b.delegate(".editOrder","click",function(){var a=$(this).closest("li");a.find("input.name").val(a.find("span.name").html()),a.find("input.drink").val(a.find("span.drink").html()),a.addClass("edit")}),b.delegate(".cancelEdit","click",function(){$(this).closest("li").removeClass("edit")}),b.delegate(".saveEdit","click",function(){var a=$(this).closest("li"),b={name:a.find("input.name").val(),drink:a.find("input.drink").val()};$.ajax({type:"PUT",url:"http://rest.learncode.academy/api/learncode/orders/"+a.attr("data-id"),data:b,success:function(){a.find("span.name").html(b.name),a.find("span.drink").html(b.drink),a.removeClass("edit")},error:function(){alert("error updating order")}})})});