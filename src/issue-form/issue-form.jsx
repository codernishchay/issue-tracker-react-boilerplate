
import "./issue-form.css";

export default function IssueForm({ }) {
  const onSubmit = () => {
     // TODO : save issue to state on submit
  };
  return (
    <div className="form-container" data-tag="form-container">
      <form >
        <input
          data-tag="description"
          required
          placeholder="Description"
        />
        {/*  Add a drop down for "data-tag="severity", using <select> and <option> 
            to select between { A : Low , B : Medium , C : High  } 
        */}
        <textarea
          data-tag="assigned_to"
          required
          placeholder="Assigned To"
        />
        <input type="submit" data-tag="submit" />
      </form>
    </div>
  );
}
