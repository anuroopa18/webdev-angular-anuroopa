export class SectionServiceClient{
    //SECTION_URL = 'http://localhost:3000/api/course/COURSEID/section';

    findSectionsForCourse(courseId){
        return fetch('http://localhost:3000/api/course/'+courseId+'/section')
        .then(response => response.json());
    }

    enrollStudentInSection(sectionId,courseId){
        return fetch('http://localhost:3000/api/course/'+courseId+'/section/'+sectionId+ '/enrollment',{ 
            method:'post',
            credentials:'include'
        }).then(response => response.json());
    }

    unenrollStudentFromSection(sectionId){
        return fetch('http://localhost:3000/api/unenroll/'+sectionId,{
            method:'delete',
            credentials:'include'
        }).then(response => response.json());
    }

    findSectionsForStudent(){
        return fetch('http://localhost:3000/api/student/section',{
            credentials:'include'
        }).then(response => response.json());
    }

    findCoursesForStudent(){
        return fetch('http://localhost:3000/api/student/course',{
            credentials:'include'
        }).then(response => response.json());
    }

    deleteSection(sectionId){
    return fetch('http://localhost:3000/api/section/'+sectionId,{
        method:'delete',
        credentials: 'include'
       })
    }

    findSectionById(sectionId) {
        return fetch('http://localhost:3000/api/sections/' + sectionId, {
            credentials: 'include'
        })
       .then(response => response.json());
    }

    deleteEnrollmentForSection(sectionId){
        return fetch('http://localhost:3000/api/enrollment/'+sectionId,{
            method:'delete',
            credentials: 'include'
           })
        }

    updateSection(name,seats,sectionId,availableSeats){
        const section = {
            name: name,
            seats: seats,
            availableSeats:availableSeats
        };
        return fetch('http://localhost:3000/api/section/update/' +sectionId, {
            body: JSON.stringify(section),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        }) .then(response => response.json());
        

    }

    createSection(courseId,name,seats){
      const section ={
          courseId:courseId,
          name:name,
          seats:seats,
          availableSeats:seats};
      return fetch('http://localhost:3000/api/course/'+courseId+'/section',{
             method:'post',
             body: JSON.stringify(section),
             credentials: 'include',
             headers:{
                 'content-type':'application/json'
             }

      }).then(response => response.json());
    }
}