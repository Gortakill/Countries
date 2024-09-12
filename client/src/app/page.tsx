import { MainPage } from '@/components/MainPage/MainPage.component';

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-3">Countries List: </h1>
            <MainPage />
        </main>
    );
}
