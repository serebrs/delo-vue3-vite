<template>
  <main class="overflow-auto h-screen pb-24 px-6">
    <!-- Блок с таблицей документов //min-w-[54rem]// -->
    <div class="overflow-clip shadow-sm shadow-slate-200 rounded-lg">
      <table class>
        <thead class="bg-slate-200 sticky top-0 shadow-sm shadow-slate-300">
          <tr>
            <th
              scope="col"
              class="px-3 pl-6 py-3 text-left text-xs font-medium text-slate-900 uppercase"
            >Тип</th>
            <th
              scope="col"
              class="px-3 py-3 text-left text-xs font-medium text-slate-900 uppercase"
            >Номер</th>
            <th
              scope="col"
              class="px-3 py-3 text-left text-xs font-medium text-slate-900 uppercase"
            >Дата</th>
            <th
              scope="col"
              class="px-3 py-3 text-left text-xs font-medium text-slate-900 uppercase w-full"
            >Содержание</th>
            <th
              scope="col"
              class="px-3 py-3 text-left text-xs font-medium text-slate-900 uppercase"
            >Ответственные</th>
            <th
              scope="col"
              class="px-3 py-3 text-center text-xs font-medium text-slate-900 uppercase"
            >Операция</th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="odd:bg-white even:bg-slate-50 hover:bg-sky-50 hover:ring-1 hover:ring-inset hover:ring-sky-200"
          >
            <td class="px-3 pl-6 py-2 whitespace-nowrap text-sm text-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                />
                <path
                  d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                />
              </svg>
            </td>
            <td class="px-3 py-2 whitespace-nowrap text-sm text-slate-600">№ 1245/45</td>
            <td class="px-3 py-2 whitespace-nowrap text-sm text-slate-600">15.11.2022</td>
            <td
              class="px-3 py-2 whitespace-normal text-sm text-slate-600"
            >Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician</td>
            <td class="px-3 py-2 whitespace-nowrap text-xs text-slate-600">
              <div class="flex flex-col items-start justify-center">
                <span class>Cooper</span>
                <span class>Jane Cooper</span>
                <span class>Jane Cooper</span>
              </div>
            </td>
            <td class="px-3 py-2 whitespace-nowrap text-sm text-slate-500">
              <div class="flex flex-row justify-between items-center">
                <a href="#" class="p-1 hover:text-amber-600 hover:bg-amber-200 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                    />
                  </svg>
                </a>
                <a href="#" class="p-1 hover:text-blue-600 hover:bg-blue-200 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
                    />
                  </svg>
                </a>
                <a href="#" class="p-1 hover:text-red-600 hover:bg-red-200 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {

}
</script>