export class CourseServiceClient{
    findAllCourses(){
        return fetch('http://localhost:8080/api/course')
        .then(response => response.json())
        
    }

    findCourseById(courseId){
        return fetch('http://localhost:8080/api/course' + '/' + courseId)
        .then(response => response.json())
    }

    
}