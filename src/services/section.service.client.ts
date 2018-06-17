export class SectionServiceClient{
    //SECTION_URL = 'http://localhost:3000/api/course/COURSEID/section';

    findSectionsForCourse(courseId){
        return fetch('http://localhost:3000/api/course/'+courseId+'/section')
        .then(response => response.json());
    }

    enrollStudentInSection(sectionId){
        return fetch('http://localhost:3000/api/section/'+sectionId+ '/enrollment',{ 
            method:'post',
            credentials:'include'
        })
    }

    findSectionsForStudent(){
        return fetch('http://localhost:3000/api/student/section',{
            credentials:'include'
        }).then(response => response.json());
    }

    createSection(courseId,name,seats){
      const section ={courseId,name,seats};
      return fetch('http://localhost:3000/api/course/'+courseId+'/section',{
             method:'post',
             body: JSON.stringify(section),
             credentials: 'include',
             headers:{
                 'content-type':'application/json'
             }

      });
    }
}