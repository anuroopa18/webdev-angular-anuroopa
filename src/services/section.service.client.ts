export class SectionServiceClient{
    //SECTION_URL = 'http://localhost:3000/api/course/COURSEID/section';

    findSectionsForCourse(courseId){
        return fetch('http://localhost:3000/api/course/'+courseId+'/section')
        .then(response => response.json());
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