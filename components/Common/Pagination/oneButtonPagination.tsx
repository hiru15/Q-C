interface IPagination {
  loadingPage: boolean;
  page: number;
  maxpage: number;
  type: string;
  handleloadMoreGame: any;
  allGameShowReady: any;
  items: Array<any>;
}

const PaginationUI = ({
  loadingPage,
  page,
  maxpage,
  type,
  handleloadMoreGame,
  allGameShowReady,
  items,
}: IPagination) => {
  return (
    <nav aria-label="Pager" style={{ maxWidth: '60%', marginLeft: '20%' }}>
      {!allGameShowReady && items.length > 0 && (
        <button
          disabled={loadingPage}
          style={{ width: '100%', marginTop: '30px', marginBottom: '30px' }}
          onClick={() => {
            handleloadMoreGame();
          }}
          pill-primary="true"
        >
          Cargar más juegos
        </button>
      )}
    </nav>
  );
};

export default PaginationUI;
