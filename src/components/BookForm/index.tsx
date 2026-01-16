import type { Book } from "@/src/types/types";
import "./style.scss";
import { FieldInfo } from "./FieldInfo";
import { useForm } from "@tanstack/react-form";

type BookFormProps = {
  initialState?: Book;
  onSubmit: (data: Omit<Book, "id">) => void;
};

export default function BookForm({ initialState, onSubmit }: BookFormProps) {
  const form = useForm({
    defaultValues: (initialState as Omit<Book, "id">) ?? {
      name: "",
      author: "",
      description: "",
      imagePath: "",
    },
    onSubmit: ({ value }) => onSubmit(value),
  });

  return (
    <div className="book-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div>
          <form.Field
            name="name"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? "A book title is required"
                  : value.length < 3
                    ? "Title must be at least 3 characters long"
                    : undefined,
            }}
            children={(field) => {
              return (
                <div
                  className={`text-input-wrapper ${field.state.meta.isTouched && !field.state.meta.isValid && "error"}`}
                >
                  <label htmlFor={field.name}>Title:</label>
                  <input
                    id={field.name}
                    placeholder="Title"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </div>
              );
            }}
          />
        </div>
        <div>
          <form.Field
            name="author"
            children={(field) => {
              return (
                <div className="text-input-wrapper">
                  <label htmlFor={field.name}>Author:</label>
                  <input
                    placeholder="Author"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </div>
              );
            }}
          />
        </div>
        <div>
          <form.Field
            name="description"
            validators={{
              onChange: ({ value }) =>
                value && value.length > 300
                  ? "Description can be max 300 characters long"
                  : undefined,
            }}
            children={(field) => {
              return (
                <div className="text-input-wrapper">
                  <label htmlFor={field.name}>Description:</label>
                  <textarea
                    placeholder="Description"
                    rows={5}
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </div>
              );
            }}
          />
        </div>
        <div>
          <form.Field
            name="imagePath"
            children={(field) => {
              return (
                <div className="text-input-wrapper">
                  <label htmlFor={field.name}>Cover Image:</label>
                  <input
                    type="file"
                    accept="image/*"
                    id={field.name}
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={(e) => {
                      if (!e.target.files) return;
                      field.handleChange(
                        URL.createObjectURL(e.target.files[0]),
                      );
                    }}
                  />
                  <FieldInfo field={field} />
                </div>
              );
            }}
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <>
              <button
                type="submit"
                className="btn primary"
                disabled={!canSubmit}
              >
                {isSubmitting
                  ? "..."
                  : initialState
                    ? "Update book"
                    : "Add book"}
              </button>
            </>
          )}
        />
      </form>
    </div>
  );
}
