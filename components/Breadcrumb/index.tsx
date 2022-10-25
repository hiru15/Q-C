import Link from 'next/link';
import capitalizeFirstLetter from '@utils/capitalizeFirstLetter';
const Breadcrumbs = ({
    section,
    currentPage
} : any) => {

    return (
        <div className="container marginHeaderBreadcrumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link href="/">
                        <a>Inicio</a>
                    </Link>
                </li>
                <li className="breadcrumb-item">
                    <Link href={`/${section}`}>
                        <a>{capitalizeFirstLetter(section)}</a>
                    </Link>
                </li>
                <li className="breadcrumb-item active">
                    <a>{currentPage}</a>
                </li>
            </ol>
        </div>
    )
}

export default Breadcrumbs;