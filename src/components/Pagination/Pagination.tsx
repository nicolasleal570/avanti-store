interface PaginationProps {
  handleNextPage: () => void;
  handlePrevPage: () => void;
  disabledPrevButton?: boolean;
  disabledNextButton?: boolean;
}

interface ChangePageButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

function ChangePageButton({
  className,
  text,
  ...props
}: ChangePageButtonProps) {
  return (
    <button
      {...props}
      className={`bg-gray-200 py-3 px-6 rounded ${
        props.disabled
          ? "bg-opacity-30 text-gray-500  cursor-not-allowed"
          : "text-gray-700"
      } ${className}`}
    >
      {text}
    </button>
  );
}

export function Pagination({
  handlePrevPage,
  handleNextPage,
  disabledPrevButton,
  disabledNextButton,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center space-x-4">
      <ChangePageButton
        type="button"
        text="Previous page"
        id="previousPageButton"
        onClick={handlePrevPage}
        disabled={disabledPrevButton}
      />

      <ChangePageButton
        type="button"
        text="Next page"
        id="nextPageButton"
        onClick={handleNextPage}
        disabled={disabledNextButton}
      />
    </div>
  );
}
