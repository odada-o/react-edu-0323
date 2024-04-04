function Profile() {
    return (
        <div>
            <div className="max-w-5xl mx-auto py-10 px-5">
                <div className="w-60 h-60 rounded-full bg-gray-400 flex justify-center items-center text-3xl">
                    김가을
                </div>
                <h2 className="text-xl mt-5 font-bold text-3xl">fall</h2>
                <nav className="mt-5 flex flex-col gap-2">
                    <a href="#">Github :</a>
                    <a href="#">Hompage :</a>
                    <a href="#">email :</a>
                </nav>
            </div>
        </div>
    )
}

export default Profile
