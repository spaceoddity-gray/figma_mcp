import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#280F33] to-[#5627CC] text-white font-sans">
      {/* 상단 앱바 */}
      <header className="bg-[#262626] px-4 py-3 flex justify-between items-center z-10">
        <button
          className="p-2 active:opacity-70 transition-opacity"
          aria-label="뒤로가기"
        >
          <Image
            src="/images/back_arrow.svg"
            alt="Back"
            width={24}
            height={24}
          />
        </button>
        <button
          className="p-2 active:opacity-70 transition-opacity"
          aria-label="공유하기"
        >
          <Image
            src="/images/share_icon.svg"
            alt="Share"
            width={24}
            height={24}
          />
        </button>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 flex flex-col px-4 pb-32 overflow-y-auto">
        {/* 미션 타이틀 */}
        <section className="mt-8 mb-7 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-7 w-full">
            블링으로 지하철 전광판 달아주기
          </h1>

          {/* 달성률 프로그레스 바 */}
          <div className="w-full bg-black/20 p-5 rounded-2xl relative mb-7 shadow-lg">
            <div className="relative w-full h-14 rounded-full bg-[#2D1060] overflow-hidden">
              {/* 진행 바 (65%) */}
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#2AD2C9] to-[#7339FF] rounded-full animate-gradient"
                style={{ width: "65%" }}
              ></div>

              {/* 진행률 표시 */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center text-sm">
                <span className="text-[#D6D3FF]">/ 100%</span>
              </div>

              {/* 현재 진행률 수치 */}
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
                <span className="text-2xl font-extrabold mr-2">65%</span>
                <span className="text-xs text-[#D6D3FF]">
                  12,328,392명이 참여중
                </span>
              </div>

              {/* 진행 바 아이콘 */}
              <div className="absolute left-[65%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#482484] flex items-center justify-center progress-animation">
                <Image
                  src="/images/progress_icon.svg"
                  alt="Progress"
                  width={20}
                  height={20}
                  className="drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* 설명 리스트 */}
          <div className="w-full space-y-4">
            <div className="flex items-start gap-3 hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl">
                🩵
              </div>
              <p className="text-sm">
                블링 달성률 100%가 되면 지하철 전광판을 달아요
              </p>
            </div>
            <div className="flex items-start gap-3 hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl">
                ✍️
              </div>
              <p className="text-sm">
                블링을 낼 때마다 아티스트에게 전할 말을 적을 수 있어요
              </p>
            </div>
            <div className="flex items-start gap-3 hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl">
                ⭐️
              </div>
              <p className="text-sm">
                참여율 상위 3명은 무조건 전광판에 작성한 한마디가 올라가요
              </p>
            </div>
          </div>
        </section>

        {/* 댓글 미리보기 */}
        <section className="mt-auto mb-5">
          <div className="bg-[#662FFF]/40 p-4 rounded-2xl shadow-md hover:bg-[#662FFF]/50 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-[#D9D9D9]"></div>
              <span className="text-xs font-bold">닉네임아무거나썼습니..</span>
            </div>
            <p className="text-xs text-center">
              일 하고 나서 지쳐서 집와가지고 쉴 때 나도 모르게지나가던
              아이돌이라고 생각했던 엑소으 ㅣ노래를 듣게..
            </p>
          </div>
        </section>
      </main>

      {/* 하단 참여 영역 */}
      <div className="fixed bottom-0 left-0 right-0 flex flex-col w-full z-20">
        {/* 탭 선택 버튼 */}
        <div className="flex">
          <button className="flex-1 py-3 bg-[#662FFF] font-bold text-sm text-center active:bg-[#5627CC] transition-colors">
            참여 랭킹
          </button>
          <button className="flex-1 py-3 bg-[#482484] font-bold text-sm text-center active:bg-[#371C64] transition-colors">
            달성률
          </button>
        </div>

        {/* 참여 입력창 */}
        <div className="bg-[#5627CC] p-4 border-t border-white/20">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm">내 블링</p>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L8.5716 5.42836H14L9.7142 8.78329L11.2858 14L7 10.6451L2.7142 14L4.2858 8.78329L0 5.42836H5.4284L7 0Z"
                  fill="#68A4FF"
                />
              </svg>
              <span className="font-bold text-sm">88888</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex bg-[#2D1060]/50 rounded-3xl p-4">
              <input
                type="text"
                placeholder="참여할 블링을 입력해주세요"
                className="flex-1 bg-transparent text-white/30 outline-none text-sm"
                inputMode="numeric"
                pattern="[0-9]*"
              />
              <span className="text-white text-sm font-bold">최대</span>
            </div>

            <button className="bg-[#D9D9D9] text-white py-3 rounded-3xl text-sm font-bold hover:bg-white active:bg-white/90 transition-colors">
              참여하기
            </button>
          </div>
        </div>

        {/* 홈 인디케이터 */}
        <div className="bg-[#5D5D5D] h-8 flex items-center justify-center">
          <div className="w-32 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      {/* D-day 표시 */}
      <div className="fixed top-20 right-4 bg-[#662FFF]/50 px-3 py-1 rounded-xl shadow-md">
        <span className="font-bold text-sm">D-13</span>
      </div>
    </div>
  );
}
