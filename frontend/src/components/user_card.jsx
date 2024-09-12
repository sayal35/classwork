
import "./styles/user_card.css"
const UserCard = ({user}) => {
  return (
    <>
      <div className="user-card">
        <div className="user-title">
          <div>
          <h1>{user['name']}</h1>
          <p>{user['username']}</p>
          </div>
        </div>
        <div className="user-info">
          {/* <p><strong>Email:</strong>Sincere@example.com </p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Website:</strong>www.example.com</p> */}
          <UserInfo title="Email"  value={user.email}/>
          <UserInfo title="Phone" value={user.phone}/>
          <UserInfo title="Website" value={user.website}/>
        </div>
        <div className="user-address">
          {/* <p><strong>Address:</strong></p>
          <p> Apt.556 kulas Light </p>
          <p>GwenBorough,92298-385</p> */}
          <UserInfo title="Address" value={user.address.street}/>
          {/* <UserInfo  value="Kathmandu" extra="true"/> */}
        </div>
        <div className="user-company">
          {/* <p><strong>Company:</strong> </p>
          <p>Example Corp</p>
          <p><strong>Catchphrase:</strong> </p>
          <p>Multi-layered client-server neural-net</p>
          <p><strong>Buisness:</strong> </p>
          <p>harness real time e-markets</p> */}
          <UserInfo title="Company" value={user.company.name}/>
          <UserInfo title="Catchphrase" value={user.company.catchPhrase}/>
          <UserInfo title="Buisness" value={user.company.bs}/>
        </div>
      </div>
    </>
  );
}
export default UserCard;

const UserInfo=({title,value,extra})=>{
  return(
    <p>
      {/* {!extra && <strong>{title}: &nbsp;</strong>}
      {extra && <br/>}
      {value} */}
      <strong>{title}:&nbsp;</strong>{value}
    </p>
  );

}