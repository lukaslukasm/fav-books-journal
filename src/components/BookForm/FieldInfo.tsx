import type { AnyFieldApi } from "@tanstack/react-form";

/**
 * Renders an error message/messages if the field has some.
 *
 */
export function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <span className="field-info">
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <em>{field.state.meta.errors.join(",")}</em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </span>
  );
}
