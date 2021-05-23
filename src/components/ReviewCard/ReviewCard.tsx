import './ReviewCard.css'

type TEmployeeDetails = {
  id: string,
  image: string,
  jobTitle: string,
  review: string,
  name: string
}

type IReviewCardProps = {
  currentEmployee: TEmployeeDetails,
  onButtonClick: Function
}

const ReviewCard: React.FC<IReviewCardProps> = (props) => {

  const { currentEmployee } = props;

  return (
    <section id='review-card-root'>
      <div id='image-avatar'>
        <img id='employee-image'src={currentEmployee.image} alt='employee' height={150} width={150}></img>
      </div>
      <div id='employee-name'>{currentEmployee.name}</div>
      <div id='employee-job-title'>{currentEmployee.jobTitle}</div>
      <div id='employee-review'>{currentEmployee.review}</div>
      <div>
        <span id='left-arrow' onClick={() => props.onButtonClick('LEFT')} className="material-icons arrow-buttons">keyboard_arrow_left</span>
        <span id='right-arrow' onClick={() => props.onButtonClick('RIGHT')} className="material-icons arrow-buttons">keyboard_arrow_right</span>
      </div>
      <button id='surprise-button' onClick={() => props.onButtonClick('SURPRISE')}>Surprise Me</button>
    </section>
  );
}

export default ReviewCard;
