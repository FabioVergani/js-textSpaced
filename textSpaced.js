//✔ 
var _Slice=Array.prototype.slice;
var _Call=Function.prototype.call;

//✔ 
function isNumber(e){return typeof(e)==='number'};

//✔ 
function defineFunctionShortcut(o,p,x){o[p]=_Call.bind(x);return o};

//✔
/*ℹ Slice Zero-based index:
										i[=BeginOfExtraction]
										 As a negative index, indicates an offset from the end of the sequence. 
										 (0 by defaults)

										j[=EndOfExtraction]
										 slice extracts up-to-but-not-including-end.
										 As a negative index, indicates an offset from the end of the sequence. 
										 (If is omitted, slice extracts to the end of the sequence.)

										 e.g.: If m=[0,1,2,3,4,5,6]
																		⤷ slice(-1) extracts [6]
																		⤷ slice(-2) extracts [5,6]

																		⤷ slice(1,-2) extracts[1, 2, 3, 4]

																		⤷ slice(3) extracts [3,4,5,6]

																		⤷ slice(2,6) extracts [2,3,4,5] 
																		⤷ slice(3,6) extracts [3,4,5]
																		⤷ slice(3,5) extracts [3,4]
																		⤷ slice(3,4) extracts [3]
																		
																		⤷ slice(0,-1) extracts [0,1,2, 3, 4, 5]] 
																		⤷ slice(2,-1) extracts [2, 3, 4, 5]] 
																		⤷ slice(4,-1) extracts [ 4, 5]] 
*/
var Slice=defineFunctionShortcut(function(x,i,j){return Slice.f(x,isNumber(i)?i:0,j)},'f',_Slice);//✔ 

//✔ 
function textSpaced(){return Slice(arguments).join('\u0020')};

textSpaced()

console.log(textSpaced(1,4,{},false,[1,2],"a!",b));
