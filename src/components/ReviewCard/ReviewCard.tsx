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
      <div>Review Card</div>
      <div>{currentEmployee.name}</div>
      <button onClick={() => props.onButtonClick('LEFT')}>LEFT</button>
      <button onClick={() => props.onButtonClick('RIGHT')}>RIGHT</button>
      <button onClick={() => props.onButtonClick('SURPRISE')}>SURPRISE</button>
    </section>
  );
}

export default ReviewCard;
