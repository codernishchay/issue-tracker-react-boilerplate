
import "./issue-form.css";

export default function IssueForm({ }) {
  const onSubmit = () => {
   
  };
  return (
    <div className="form-container" data-tag="form-container">
      <form >
        <input
          data-tag="description"
          required
          placeholder="Description"
        />
        <select  data-tag="severity">
          <option value="A">Low</option>
          <option value="B">Medium</option>
          <option value="C">High</option>
        </select>
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
