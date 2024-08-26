function Button({ type, count, onAddToCart, onCount, children }) {
  const styles = {
    primary:
      "flex font-bold justify-center w-full rounded-[0.625rem] bg-orange px-6 py-4 transition-all duration-150 hover:bg-orange/70",
  };

  if (onAddToCart)
    return (
      <button
        className={styles[type]}
        onClick={() => {
          if (count === 0) return;
          onAddToCart((cur) => cur + count);
          onCount(0);
        }}
      >
        <span className="flex items-center gap-4">{children}</span>
      </button>
    );

  return (
    <button className={styles[type]}>
      <span>{children}</span>
    </button>
  );
}

export default Button;
