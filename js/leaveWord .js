$(() =>{
	let flag = false; //sendbtn按钮是否工作的开关!
	let ispc = IsPC();
	console.log(ispc);
	 $('.owl-dots').on('click',function(){
		 console.log(2)
		 lwbtn();
	 })
	 
	// $('.only-show .owl-stage').width('500000');
				//清空开始留言区域的空格
	$('.userconten').val('');
	
				//点击留言发送事件
	$('.btn-primary').on('click',function(){
	if(ispc){
						 // $('.only-show .only-show').empty('');
						  //$(' .only-show .owl-stage').empty();
						 //   userConten();
							// userClone(true);
						 // userClone(false);
						 var  userconten = $('.userconten').val();
						 var userclass = removeAllSpace($('#userclass').val());
						 var  username = removeAllSpace($('#username').val());
					   var usersex = $('#usersex').prop('checked') == true ?'男' :'女';
							//清空所有内容
							$('.userconten').val('');
							$('#userclass').val('');
							$('#username').val('');
							testData();
						$.ajax({
							type:'post',
							url:'http://134.175.54.216:8080/wuhan/leaveServlet',
							data:{
								userclass,
								userconten,
								username,
								usersex
							},
							success(respoen){
								 console.log(respoen);
								 
									
							}
						})
					}
					
				else{
					// $('.only-show .only-show').empty('');
					//  $(' .only-show .owl-stage').empty();
					 	 //phoneConten();
					 var  userconten = $('.userconten').val();
					 var userclass = removeAllSpace($('#userclass').val());
					 var  username = removeAllSpace($('#username').val());
					 var usersex = $('#usersex').prop('checked') == true ?'男' :'女';
						//清空所有内容
						$('.userconten').val('');
						$('#userclass').val('');
						$('#username').val('');
						testData();
					// $.ajax({
					// 	type:'post',
					// 	url:'',
					// 	data:{
					// 		userclass,
					// 		userconten,
					// 		username,
					// 		usersex
					// 	},
					// 	success(respoen){
					// 		 console.log(respoen);
					// 		  var obj = json.parse(respoen);
								
					// 	}
					// })
									}
									})
	
	
	//通过input事件来检测
		$('.userconten').on('input',() =>{
			testData();
		});
		$('#userclass').on('input',() =>{
			testData();
		});
		$('#username').on('input',() =>{
			testData();
		});
	
	//正则去空格
	function removeAllSpace(str) {
	return str.replace(/\s+/g, "");
	}
	
	//用来检测数据是否合格
	function testData(){
		var  userconten = $('.userconten').val();
		var  userclass = removeAllSpace($('#userclass').val());
		var  username = removeAllSpace($('#username').val());
		 if(userconten.length >= 1 && userclass.length >=1 && username.length >= 1){
			flag = true;
		 }
		 else{
			  flag = false;
		 }
		 lwbtn();
	}
	
	//留言按钮状态设置!
	function lwbtn(){
	
		if(flag){
			$('.btn-primary').attr('disabled',false);
			$('.btn-primary').attr('data-dismiss',"modal");
		}
		else
		{
			$('.btn-primary').attr('disabled','disabled');
			$('.btn-primary').attr('data-dismiss',"!modal");
		}
	}
	
	function userConten(){
		for(var i = 3; i < 11; i++){
			// $('.only-show .owl-stage').width('500000');
		$('.only-show .owl-stage').prepend(`<div class="owl-item" style="width: 366.667px; margin-right: 20px;"><div class="testimonials-item">
		   <h2>中国加油，武汉加油！</h2>
		   <div class="testimonials-stars"> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> </div>
		   <p>武汉加油！</p>
		   <img alt="" src="images/testimonials1.png">
		   <h3>贺狗<br>
		     <span>18网应2班</span>`+ i + `</h3>
		 </div></div>`);
		 }
		 
	}
	
	function userClone(fun){
		if(fun){
			for(let i = 0; i < 3; i++){
			 	// $('.only-show .owl-stage').width('500000');
			  $('.only-show .owl-stage').prepend(`<div class="owl-item cloned" style="width: 366.667px; margin-right: 20px;"><div class="testimonials-item">
			    <h2>中国加油，武汉加油！</h2>
			    <div class="testimonials-stars"> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> </div>
			    <p>中国加油！</p>
			    <img alt="" src="images/testimonials1.png">
			    <h3>颜志成`+i+`<br>
			      <span>18网应2班</span> </h3>
			  </div></div>`);
			  }
				}
				else{
					for(let i = 0; i < 3; i++){
					 	// $('.only-show .owl-stage').width('500000');
					  $('.only-show .owl-stage').append(`<div class="owl-item cloned" style="width: 366.667px; margin-right: 20px;"><div class="testimonials-item">
					    <h2>中国加油，武汉加油！</h2>
					    <div class="testimonials-stars"> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> </div>
					    <p>中国加油！</p>
					    <img alt="" src="images/testimonials1.png">
					    <h3>颜志成`+i+`<br>
					      <span>18网应2班</span> </h3>
					  </div></div>`);
					  }
						
				}
		
			
	}
	
	function IsPC() {
	        var userAgentInfo = navigator.userAgent;
	        var Agents = ["Android", "iPhone",
	                    "SymbianOS", "Windows Phone",
	                    "iPad", "iPod"];
	        var flag = true;
	        for (var v = 0; v < Agents.length; v++) {
	            if (userAgentInfo.indexOf(Agents[v]) > 0) {
	                flag = false;
	                break;
	            }
	        }
	        return flag;
	    }

	function phoneClone(flag){
		if(flag){	
			for(var i = 0; i < 3; i++){
			 	// $('.only-show .owl-stage').width('500000');
			  $('.only-show .owl-stage').prepend(`<div class="owl-item cloned" style="width: 366.667px; margin-right: 20px;"><div class="testimonials-item">
			    <h2>中国加油，武汉加油！</h2>
			    <div class="testimonials-stars"> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> </div>
			    <p>中国加油！</p>
			    <img alt="" src="images/testimonials1.png">
			    <h3>颜志成<br>
			      <span>18网应2班</span> </h3>
			  </div></div>`);
			  }
	}
		else{
			for(var i = 0; i < 3; i++){
					 	// $('.only-show .owl-stage').width('500000');
					  $('.only-show .owl-stage').append(`<div class="owl-item cloned" style="width: 366.667px; margin-right: 20px;"><div class="testimonials-item">
					    <h2>中国加油，武汉加油！</h2>
					    <div class="testimonials-stars"> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> </div>
					    <p>中国加油！</p>
					    <img alt="" src="images/testimonials1.png">
					    <h3>颜志成<br>
					      <span>18网应2班</span> </h3>
					  </div></div>`);
					  }
			
		}
}

	function phoneConten(){
		for(var i = 0; i < 11; i++){
			// $('.only-show .owl-stage').width('500000');
		$('.only-show .owl-stage').prepend(`<div class="owl-item  owl-animated-out slideOutDown" style="width: 345px; margin-right: 20px; left: 365px;"><div class="testimonials-item">
       <h2>中国加油，武汉加油！</h2>
       <div class="testimonials-stars"> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> <span class="icon"> <i class="fa fa-star"></i> </span> </div>
       <p>武汉加油！</p>
       <img alt="" src="images/testimonials1.png">
       <h3>温强`+i+`<br>
         <span>18网应2班</span> </h3>
     </div></div>`);
		 }
	}
})
