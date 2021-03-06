let _singleton = Symbol();
const COURSE_API_URL =
    'http://saluja-summer1-2018.herokuapp.com/api/course';

class CourseServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseServiceClient(_singleton);
        return this[_singleton]
    }
    findAllCourses() {
        return fetch(COURSE_API_URL)
            .then(function(response){
                return response.json();
            });
    }
    createCourse(course) {
        return fetch(COURSE_API_URL, {
            body: JSON.stringify(course),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })}

     deleteCourse(courseId){
         return fetch(COURSE_API_URL + '/' + courseId,
             {
                 method: 'DELETE'
             }).then(function (response) {
             return response;
         })
     }

}
export default CourseServiceClient;