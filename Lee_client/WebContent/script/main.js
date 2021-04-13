const apiKey="EvmvZ2MyHMImGzkqFgCpFnKK2WCnDU";
const username="deed1515";

//include 	
$(function(){
	$("#header").load("/Lee_client/include/header.html");	
	$("#nav").load("/Lee_client/include/nav.html");	
	$("#aside").load("/Lee_client/include/aside.html");	
	$("#footer").load("/Lee_client/include/footer.html");	
});

/*js 공용 출력메소드*/
//1. 입력 체크 실패 메시지 출력
function printErrorMessage(element, message) {
	element.text(message).css({"color":"red", "font-size":"0.75em"});
	return false;
}
//2. 입력 체크 성공 메시지 출력
function printMessage(element, message) {
	element.text(message).css({"color":"green", "font-size":"0.75em"});
}
//4.서버에서 실패 응답이 왔을때 
function printError(xhr, massage){
	toastr.error(massage, "처리 오류");
	console.log("에러 코드:"+xhr.status+",에러 메시지:"+xhr.responseText);
}
//3.ES6 of 반복문 이용한 FormData출력
function printFormData(formData){
	for(var key of formData.keys())
		console.log(key);
	for(var value of formData.values())
		console.log(value);
}















