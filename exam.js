function generateCourseList(subject){
    var courseObject = {
        name: 'course-name',
        code: 'course-id'
    }
    var courseList = [];

    switch (subject){
        case 'nodejs':
            let nodejs1 = courseObject;
            nodejs1.name = 'NodeJs Beginner';
            nodejs1.code = 'N101';
            courseList.push(nodejs1);
            break;
        case 'html':
            let html = courseObject;
            html.name = 'HTML';
            html.code = 'N101';
            courseList.push(html);
            break;
    }
    return courseList;
}
var myCourses = generateCourseList('nodejs')
console.log(myCourses)