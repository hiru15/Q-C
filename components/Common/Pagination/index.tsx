import { Animation, listAnimation } from '@hooks/useAnimationLottie';
import usePagination from '@hooks/usePagination';
import { useTranslation } from 'next-i18next';

interface IPagination {
  loadingPage: boolean;
  page: number;
  maxpage: number;
  type: string;
  handleloadMoreGame: any;
  allGameShowReady: any;
}

const PaginationUI = ({
  loadingPage,
  page,
  maxpage,
  type,
  handleloadMoreGame,
  allGameShowReady,
}: IPagination) => {
  const countBet = 3;

  const { t } = useTranslation('common');
  const {
    currentPage,
    offset,
    totalItems,
    itemsPerPage,
    handlePagination,
    handleButtonPagination,
    setTotalItems,
  } = usePagination();

  const getPage = () => {
    const pageGenerated = [];

    for (let i = 0; i < countBet[0]; i++) {
      pageGenerated.push(
        <li
          className={page === i ? 'page-item active' : 'page-item'}
          onClick={(e) => {
            e.preventDefault();
            handleButtonPagination(i);
          }}
          aria-current="page"
        >
          <a className="page-link" href="#">
            {i + 1}
          </a>
        </li>
      );
    }

    if (countBet[1] > 0) {
      pageGenerated.push(
        <li
          className={page === countBet[0] ? 'page-item active' : 'page-item'}
          onClick={(e) => {
            e.preventDefault();
            handleButtonPagination(countBet[0]);
          }}
          aria-current="page"
        >
          <a className="page-link" href="#">
            {countBet[0] + 1}
          </a>
        </li>
      );
    }

    if (pageGenerated.length === 0) {
      pageGenerated.push(
        <li
          className={'page-item active'}
          onClick={(e) => {
            e.preventDefault();
            handleButtonPagination(countBet[0]);
          }}
          aria-current="page"
        >
          <a className="page-link" href="#">
            1
          </a>
        </li>
      );
    }

    return pageGenerated;
  };

  if (type === 'OneButton') {
    return (
      <nav aria-label="Pager" style={{ maxWidth: '60%', marginLeft: '20%' }}>
        {!allGameShowReady && (
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
  }

  return (
    <nav aria-label="Page" className="horizontalScrollNav">
      <ul className="pagination">
        <>
          <li
            className={page <= 0 ? 'page-item disabled' : 'page-item'}
            onClick={(e) => {
              e.preventDefault();
              handlePagination('prev');
            }}
          >
            <a
              className="page-link"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
              style={{
                paddingLeft: '0px',
                paddingRight: '10px',
                display: 'flex',
              }}
            >
              <img src="/assets/icons/left-orange-chevron.svg" />{' '}
              <span className="only-desktop">
                {t('componentes.Account.MyAccount.HistoryAccount.textBack')}
              </span>
            </a>
          </li>

          {loadingPage ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Animation pathAnimation={listAnimation.loadingBonoCashback} />
            </div>
          ) : (
            getPage()
          )}

          <li
            className={page >= maxpage - 1 ? 'page-item disabled' : 'page-item'}
            onClick={(e) => {
              e.preventDefault();
              handlePagination('next');
            }}
          >
            <a
              className="page-link"
              href="#"
              style={{
                paddingLeft: '10px',
                paddingRight: '0px',
                display: 'flex',
              }}
            >
              <span className="only-desktop">
                {t('componentes.Account.MyAccount.HistoryAccount.textNext')}{' '}
              </span>
              <img src="/assets/icons/right-orange-chevron.svg" />
            </a>
          </li>
        </>
      </ul>
    </nav>
  );
};

export default PaginationUI;
