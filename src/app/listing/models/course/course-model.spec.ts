import { CourseModel } from './course-model.class';

describe('CourseModel', () => {
  it('should create an instance', () => {
    expect(new CourseModel({id: 123})).toBeTruthy();
  });
});
