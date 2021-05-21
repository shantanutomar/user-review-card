import { useCallback, useEffect, useState } from "react";
import faker from 'faker';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css'

type TEmployeeDetails = {
  id: string,
  image: string,
  jobTitle: string,
  review: string,
  name: string
}

const Reviews: React.FC = () => {

  const [allEmployeeDetails, setAllEmployeeDetails] = useState<Array<TEmployeeDetails>>([]);
  const [currentEmployee, setCurrentEmployee] = useState<TEmployeeDetails>({name: '', image: '', jobTitle: '', review: '', id: ''});

  const fetchAllEmployeeImages = async () => {
    return fetch('https://randomuser.me/api/?results=50&inc=picture&noinfo')
      .then(data => data.json());
  };

  const createAndSetEmployeeDetails: Function = useCallback(() => {
    let mockedEmployeeDetails: Array<TEmployeeDetails> = [];
    fetchAllEmployeeImages().then(images => {
      for(let index = 0; index < 50; index++) {
        mockedEmployeeDetails.push({
          id: faker.datatype.uuid(),
          image: images.results[index].picture.large,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          jobTitle: faker.name.jobTitle(),
          review: faker.lorem.text(),
        });
      }
      setAllEmployeeDetails(mockedEmployeeDetails);
      setCurrentEmployee(mockedEmployeeDetails[0]);
    });

  }, []);

  useEffect(() => {
    createAndSetEmployeeDetails();
  }, [createAndSetEmployeeDetails]);

  const randomIntFromRange = (min: number, max: number): number => { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const onButtonClick = (requestType: string) => {
    let currentIndex = allEmployeeDetails.findIndex(employee => employee.id === currentEmployee.id);

    if(currentIndex <= 0 && requestType === 'LEFT') currentIndex = 50;
    if(currentIndex >= 49 && requestType === 'RIGHT') currentIndex = -1;
    if(requestType === 'LEFT') {
      console.log('Going to->', currentIndex - 1);
      setCurrentEmployee({...allEmployeeDetails[currentIndex - 1]});
    } else if(requestType === 'RIGHT') {
      console.log('Going to->', currentIndex + 1);
      setCurrentEmployee({...allEmployeeDetails[currentIndex + 1]});
    } else {
      setCurrentEmployee({...allEmployeeDetails[randomIntFromRange(0, 49)]});
    }
  }

  return (
    <section id='reviews-root'>
      <div>Our Reviews</div>
      <ReviewCard currentEmployee={currentEmployee} onButtonClick={onButtonClick}/>
    </section>
  );
}

export default Reviews;