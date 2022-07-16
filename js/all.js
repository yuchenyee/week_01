document.getElementById('countId').onclick = function(){
    var hamPrice = 20;
    var cokaPrice = 10;
    var hamNum = parseInt(document.getElementById('hamNumId').value)*hamPrice;
    var cokaNum = parseInt(document.getElementById('cokaNumId').value)*cokaPrice;
    document.getElementById('totalId').textContent = hamNum + cokaNum;
}


var MoonClass = {
    teacher: "Gary",
    student: ["Sam","Jenny","Rose"],
    studentGrade: [88,79,99],
    studentNumber: 3,
    classRoom: "C104"
    };
    
    //請在下方輸入您的答案
    var myTeacher = MoonClass.teacher;
    MoonClass.classRoom = 'B106';    //當我們要更改物件中某一屬性的值時
    MoonClass.classTime = '09:00AM';    //當我們要增加物件中的屬性時


    var SunClass = {
        teacher: "Jane",
        student: ["Andy","Peter","John"],
        studentGrade: [89,100,99],
        studentNumber: 3,
        classRoom: "B107",
        countStudent: function(){
            console.log("學生共有"+SunClass.studentNumber+"位");
        }
    };
    
    //請在下方作答

    SunClass.showClassRoom = function(){
        console.log("SunClass班在"+SunClass.classRoom+"上課喔");
    }
    
    SunClass.showClassRoom();