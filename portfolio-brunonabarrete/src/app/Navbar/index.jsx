export default function NavBar() {
    return(
        <>
            <div className="mb-32 grid">
                <a
                href="https://github.com/BrunoNabarrete"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Sobre mim{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Clica aqui e descubra mais sobre mim.
                    </p>
                </a>
            </div>
            <div className="mb-32 grid">
                <a
                href="https://github.com/BrunoNabarrete"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Projeto{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Clica aqui para ver mais sobre meus projetos.
                    </p>
                </a>
            </div>
            <div className="mb-32 grid">
                <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Skills{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Clica aqui e descubra todas as skills que eu utilizo.
                    </p>
                </a>
            </div>
            <div className="mb-32 grid">
                <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Contato{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Me chame no WhatsApp para batermos um papo.
                    </p>
                </a>
            </div>
        </>

    )
}