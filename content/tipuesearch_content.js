var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 :D \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼: fqpabi8 \n 個人倉儲: https://github.com/mdecp2024/hw-41071205 \n 個人網站: https://mdecp2024.github.io/hw-41071205/ \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n 國立虎尾科技大學機械設計工程系 - 計算機程式 - 題目一: 41071205 \n \n \n 國立虎尾科技大學機械設計工程系 - 計算機程式 - 題目二: 41071205 \n 變數名是區分大小寫的（ a  和  A  是不同的變數）。 \n 不能使用 Python 的保留字（如  if ,  else ,  True  等）作為變數名，也不能使用特殊符號 \n \n \n 國立虎尾科技大學機械設計工程系 - 計算機程式 - 題目三: 41071205 \n \n \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '國立虎尾科技大學機械設計工程系 - 計算機程式 - 題目一: 41071205 \n \n \n 國立虎尾科技大學機械設計工程系 - 計算機程式 - 題目二: 41071205 \n 變數名是區分大小寫的（ a  和  A  是不同的變數）。 \n 不能使用 Python 的保留字（如  if ,  else ,  True  等）作為變數名，也不能使用特殊符號 \n \n \n 國立虎尾科技大學機械設計工程系 - 計算機程式 - 題目三: 41071205 \n 第一題：利用物理公式求加速度，將數字以變數表示，帶入公式，求出結果。  \n 第二題：因用到較為高階的數學式，需要將數學程式編入進來，以使用語言，最後得到結果。 \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '/downloads/gistfile4.txt \n /downloads/gistfile3.txt \n /downloads/gistfile2.txt \n /downloads/gistfile1.txt \n 題目一 \n def   print_circle ( radius ): //定義了一個名為  print_circle  的函數，接受一個參數  radius ，表示圓的半徑。 \n diameter =  2  * radius //圓的直徑等於半徑的兩倍。這個值用於確定繪圖的範圍。 \n for  y  in   range (diameter +  1 ):  for  x  in   range (diameter +  1 ): //使用兩個巢狀迴圈分別遍歷畫布中的每個點  (x, y)， 外層迴圈控制垂直方向 ( y )，內層迴圈控制水平方向 ( x )， range(diameter + 1)  的範圍確保迴圈涵蓋直徑的所有點，外加一個點的範圍（因為範圍是從 0 開始的）。 \n if  (x - radius)** 2  + (y - radius)** 2  <= radius** 2 : \n \n \n 使用圓的標準方程式  ( x − h ) 2 + ( y − k ) 2 = r 2 (x - h)^2 + (y - k)^2 = r^2 ( x − h ) 2 + ( y − k ) 2 = r 2 ，判斷點  (x, y)  是否位於以  (radius, radius)  為圓心，半徑為  radius  的圓內。 \n這裡的  (radius, radius)  是圓心坐標，因為畫布以左上角  (0, 0)  為原點，圓心需要偏移到畫布中央。如果該點在圓內或圓上（小於等於半徑的平方），則執行下一步。 \n \n print ( \'*\' , end= \'\' ) //如果點位於圓內，輸出星號 ( * )， end=\'\'  表示輸出的星號後不換行，使圖形在一行中連續繪製。 \n print ( \' \' , end= \'\' ) //如果點不在圓內，輸出空格 (   )來填充空白區域。 \n \n print_circle( 20 ) // 呼叫  print_circle  函數，並將半徑設為 20。 \n \n \n 題目二 \n \n 建立了一個 HTML 畫布 ( canvas )。 \n 定義了兩個函數：\n \n 一個用於繪製單個像素（小方格）。 \n 一個用於繪製填滿的圓形（利用點陣演算法）。 \n \n \n 使用中點演算法（Midpoint Circle Algorithm）來繪製點陣圓形。 \n 最後，顯示網格背景和填滿的圓形。 \n \n \n 上課作業 \n 上課作業二 \n n = 11\nspace = \'_\'\ncenter = n // 2\n#print(center)\nfor y in range(n):\n    for x in range(n):\n        print("(", x, ", ", y, ")",sep="") \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '一開始Jupyter跟Python不同的地方在於字串程式的呈現，Python需要Print指令才能將字串輸出在視窗上。input()指令功能：顯示提示文字，並等待用戶輸入。Print()是輸出字串，兩程式的呈現的部分會有不同，可能是brython輸出視窗的關係導致。再來是將右邊的字串丟給左邊的變數，print()時使用變數名稱，不必加雙冒號，即可輸出字串。靈活使用以上程式，利用input()輸入字串，再來用print()將字串輸出得到最後的結果。 \n 利用if…else…，利用變數決定字串的範圍，再用input()輸入字串，if我們想要的書有在範圍中，print(有，我們有賣)，else輸出(不，我們沒有賣)。 \n 利用input()、.append()以及.remove()輸入想加入或移除的字串，if物品重複，輸出(已經在購物清單中)，else加入新物品，if要移除清單中的物品，print(移除物品)，else輸出(此物品沒有在清單中)。 \n index() 方法用於查找某個元素的索引值。如果元素不存在，通常會拋出異常。.pop()從列表中移除並返回指定位置的元素， .insert() 在指定位置加入新的元素。 \n 正向索引：從 0 開始。負向索引：從 -1 開始（倒數第一個元素）。反轉列表：使用 [:: -1]。單個索引（如 senses[1]）可以直接修改特定位置的元素。 \n + 運算子：用於將兩個列表拼接成一個新列表。切片操作：用於從清單中提取部分元素，並結合 + 實現插入或合併。del 的作用：刪除清單中的某個元素或切片。刪除整個物件，使其從記憶體中移除。一旦使用 del 刪除了整個物件，再次訪問該物件會引發錯誤。 \n friends = ["Geetha", "Luca", "Daisy", "Juhan"] \n 創建包含朋友名字的列表。 \n dishes = ["sushi", "burgers", "tacos", "pizza"] \n 創建包含菜肴名稱的列表。 \n print("My friends\' names are:") \n 列印一條說明。 \n print(friends) \n 輸出整個 friends 列表： \n for index in range(0, 4): \n 外層迴圈，遍歷索引 0 到 3，對應每個朋友的名字。 \n print("index: " + str(index)) \n 列印當前索引。 \n print("friend: " + friends[index]) \n 列印當前索引對應的朋友名字。 \n print("Their favorite dishes are:") \n 列印說明，表示即將列出菜肴列表。 \n print(dishes) \n 輸出整個 dishes 列表： \n 內層迴圈 1：for index in range(0, 4): \n 遍歷菜肴清單中的每個索引。 \n print("index: " + str(index)) \n 列印當前索引。 \n print("dish: " + dishes[index]) \n 列印當前索引對應的菜肴名稱。 \n 內層迴圈 2：for index in range(0, 4): \n 將朋友和對應菜肴匹配，按索引列印每個人最喜歡的菜。 \n print("My friend " + friends[index] + "\'s favorite dish is " + dishes[index]) \n 列印格式化字串，顯示朋友名字及其最喜歡的菜肴。 \n for i in range(0, len(animals)): \n 這行代碼使用 for 迴圈遍歷清單中的每個元素。 \n range(0, len(animals)) 生成一個從 0 到 len(animals)（即 3）的整數序列，表示清單的索引。 \n len(animals) 返回列表的長度（3），所以 range(0, 3) 就會生成 [0, 1, 2]，即迴圈會執行三次，分別訪問索引為 0、1 和 2 的元素。 \n i 是當前迴圈的索引，表示當前訪問的是清單中的第幾個元素。 \n 代碼通過一個  for  迴圈遍歷動物列表，並在每個位置列印動物的名稱和其位置。 \n \xa0 \n 列出清單內容與元素位置 \n print(accessories) \n for i in range(len(accessories)): \n \xa0\xa0\xa0 print("The element " + accessories[i] + " is in position " + str(i)) \n 功能： \n 輸出整個清單內容。 \n 逐一列出每個元素的名稱以及它在清單中的位置。 \n 輸出： \n [\'belt\', \'hat\', \'gloves\', \'sunglasses\', \'ring\'] \n The element belt is in position 0 \n The element hat is in position 1 \n The element gloves is in position 2 \n The element sunglasses is in position 3 \n The element ring is in position 4 \n \n   檢查元素長度是否為  6 \n \n for i in range(len(accessories)): \n \xa0\xa0\xa0 if len(accessories[i]) == 6: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 print("The element " + accessories[i] + " is in position " + str(i) + " and it has 6 characters") \n 功能： \n 找出長度正好為  6  的元素，並列出其名稱與位置。 \n The element gloves is in position 2 and it has 6 characters \n \n   檢查元素長度是否小於  6 \n \n for i in range(len(accessories)): \n \xa0\xa0\xa0 if len(accessories[i]) < 6: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 print("The element " + accessories[i] + " is in position " + str(i) + " and it has less than 6 characters") \n 功能： \n 找出長度小於  6  的元素，並列出其名稱與位置。 \n The element belt is in position 0 and it has less than 6 characters \n The element hat is in position 1 and it has less than 6 characters \n The element ring is in position 4 and it has less than 6 characters \n \n   檢查元素長度是否大於  6 \n \n n_of_characters = 6 \n for i in range(len(accessories)): \n \xa0\xa0\xa0 if len(accessories[i]) > n_of_characters: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 print("The element " + accessories[i] + " is in position " + str(i) + " and it has more than " + str(n_of_characters) + " characters") \n 功能： \n 找出長度大於  6  的元素，並列出其名稱與位置。 \n The element sunglasses is in position 3 and it has more than 6 characters \n \n   檢查元素長度是否不等於  6 \n \n for i in range(len(accessories)): \n \xa0\xa0\xa0 if len(accessories[i]) != n_of_characters: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 print("The element " + accessories[i] + " is in position " + str(i) + " and it has a number of characters different from " + str(n_of_characters)) \n 功能： \n 找出長度不等於  6  的元素，並列出其名稱與位置。 \n The element belt is in position 0 and it has a number of characters different from 6 \n The element hat is in position 1 and it has a number of characters different from 6 \n The element sunglasses is in position 3 and it has a number of characters different from 6 \n The element ring is in position 4 and it has a number of characters different from 6 \n \n   檢查位置是否小於或等於  2 \n \n position = 2 \n for i in range(len(accessories)): \n \xa0\xa0\xa0 if i <= position: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 print("The element " + accessories[i] + " is in position " + str(i) + ", which is less than or equal to " + str(position)) \n 功能： \n 找出位置小於或等於  2  的元素，並列出其名稱與位置。 \n 輸出： \n The element belt is in position 0, which is less than or equal to 2 \n The element hat is in position 1, which is less than or equal to 2 \n The element gloves is in position 2, which is less than or equal to 2 \n \n   檢查位置是否大於或等於  2 \n \n for i in range(len(accessories)): \n \xa0\xa0\xa0 if i >= position: \n \xa0\xa0\xa0 \xa0\xa0\xa0\xa0print("The element " + accessories[i] + " is in position " + str(i) + ", which is at least " + str(position)) \n 功能： \n 找出位置大於或等於  2  的元素，並列出其名稱與位置。 \n 輸出： \n The element gloves is in position 2, which is at least 2 \n The element sunglasses is in position 3, which is at least 2 \n The element ring is in position 4, which is at least 2 \n \n \n Strings \n input() \n print() \n Organizing \n favorites \n if...in.../else... \n append() and remove() \n .index() , .pop() and .insert() \n List slicing \n List slicing senses \n List slicing planets \n List slicing del \n for...in range() \n for loop with if...==.../else \n For loop for searching \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13', 'text': 'rectangle \n \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w13_ai', 'text': 'shape combination \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n', 'tags': '', 'url': 'w13_ai.html'}, {'title': 'w13_hw', 'text': 'add color \n \n 這段程式碼主要利用 HTML5 的 Canvas 進行視覺化繪圖，並通過幾何運算和區域判斷來標示不同區域的顏色。以下是該程式的主要邏輯： \n \n 建立畫布  (Canvas) ： \n \n 設定了一個 600x600 的 Canvas 元素，並將其加入到 HTML 中。 \n \n 繪製幾何圖形 ： \n \n 繪製了兩個紅色邊框的正方形。 \n 在這兩個正方形內繪製了對角線 (藍色)。 \n 繪製了兩個圓形 (黑色)，其半徑設為 141.4（約等於正方形對角線的一半）。 \n \n 判斷點的位置 ： \n \n 利用數學公式和幾何規則，判斷點是否位於以下位置： \n \n 圓內部 \n 正方形內部或外部 \n 線段上、線段上方或下方 \n 正方形的上下左右 \n \n \n 區域著色邏輯 ： \n \n 根據點所屬的幾何區域，為其設定不同的顏色。例如： \n \n 在第一個圓內且位於正方形內部且對角線上方，著色為綠色。 \n 位於第一個圓內且正方形上方，著色為青色。 \n 第二個圓內但不在正方形內，根據方位著色為不同的淺色。 \n \n \n 掃描並繪製 ： \n \n 按像素掃描畫布中的每個點，通過 get_region_color 函式獲取該點的顏色，並在畫布上進行著色。 \n 每個像素被繪製為小圓點以顯示對應的顏色。 \n \n \n 多層區域劃分 ： \n \n 將圓與正方形的交集進一步細化，區分不同組合的區域。 \n 利用列表  regions  收集點的屬性，避免多重嵌套。 \n \n \n \n 顏色填充 ： \n \n 每個區域設定了不同顏色，例如  gray  表示兩正方形內部的交集， purple  表示兩圓的交集但不在正方形內。 \n \n \n \n 像素填充優化 ： \n \n 使用  fillRect  填充像素代替繪製小圓點，提升性能。 \n \n \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_ex', 'text': 'RGB circles \n move RGB circle \n \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w15', 'text': '題目一： 從1累加到100 \n total = 0\nfor i in range(1, 101):  # range(1, 101) 代表從 1 到 100\n    total += i #+=增量運算符\n\n# 輸出結果\nprint(total) \n 題目二： addto() \n def addto(start, end): #加法或添加列表功能\n    total = 0\n    for i in range(start, end + 1):  # 從 start 到 end（包括 end）\n        total += i\n    return total #結果返回給調用\n\n# 調用 addto 函數，計算 1 到 100 的和\nresult = addto(1, 100)\nprint(result) \n 題目三： add_only_even() \n def add_only_even(start, end):\n    total = 0\n    for i in range(start, end + 1):\n        if i % 2 == 0:  # 判斷 i 是否為偶數\n            total += i\n    return total\n\n# 調用 add_only_even 函數，計算從 1 到 100 之間所有偶數的和\nresult = add_only_even(1, 100) \n 題目四： add_avoid_8() \n def add_aviod_8(start, end):\n    total = 0\n    for i in range(start, end + 1):\n        # 如果數字中包含字符 \'8\'，跳過\n        if \'8\' in str(i):  # 判斷數字中是否包含字符 "8"，str()將數據類型轉為字符串\n            continue #用於跳過目前循環的剩餘部分，直接進入下一次循環\n        total += i\n    return total\n\n# 調用 add_aviod_8 函數，計算從 1 到 100 之間的總和，避开包含數字 "8" 的數字 \n \n 心得：利用for迴圈可以將計算式簡化，迅速的決定範圍。addto()可以當加法也可以是添加新字串到列表中，add_only_even()是將奇數以外的數字累加起來，add_only_odd()則相反，add_avoid_8()只要有數字"8"就會避開，不做計算。 \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1', 'text': 'draw shapes \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'W5', 'text': '#單行註解\n#help(print)\n\'\'\'這個三引號所界定的區域\n被 Python 視為多行註解\n\'\'\'\na = "一個字串"\na = 24\na = 24.5\nprint(a)\nb = print(a, a, a, sep=\'*\') //b沒有被賦予意義，所以為None\nprint(b) \n \'\'\'\ntriangle 三角形\nsqure 正方形\nrectangle 長方形\n\'\'\'\n\nn = 5  # 總共的行數\n \nfor i in range(n):  # 對於每一行\n    # 印出空格\n    print(\' \' * (n - i - 1), end=\'\')  # 在每行前面印出空格\n    # 印出星號\n    print(\'*\' * (2 * i + 1))  # 每行印出 2*i + 1 個星號 \n #help(range)\nfor i in range(1, 6, 2):\n    print(i, end="")\n    print() \n https://gist.github.com/41071205/0889882669e572480fc210acd9764b95 \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '\n 下載\xa0 python_2025_lite.7z \xa0(可攜程式環境) \n 下載 \xa0 zmq_remote_api_ex_cube_triangle.7z \xa0(利用 Python 控制模擬場景中的物件) \n 進入可攜程式環境中 data/CoppeliaSim 目錄, 開啟 coppeliaSim.exe (機電整合模擬程式, \xa0 原始碼 ) \n 啟動可攜程式環境, 雙點擊 start_ipv6.bat, 系統會啟動四個命令列, 兩個 SciTE 編輯器 \n 執行場景控制程式前, 先處理操作系統的防火牆, 將下列指令存為 .bat 檔案後, 以管理員身分執行, 以便開啟 23000-23050 埠號進出: \n netsh advfirewall firewall add rule name="allow_23000-23050" dir=in action=allow protocol=TCP localport=23000-23050 netsh advfirewall firewall add rule name="allow_23000-23050" dir=out action=allow protocol=TCP localport=23000-23050 \n 開啟 CoppeliaSim 中的視覺串流伺服器: Modules - Connectivity - Visualization stream \n 利用 SciTE 開啟\xa0put_cubes_into_scene_1.py, 利用 Tools - Go 執行操控程式 \n 使用者可以透過瀏覽器, 以模擬場景所在電腦的 IP, 且埠號為 23020 觀看模擬場景 \n \n \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'w16_exam2', 'text': 'anchor \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'w16_exam3', 'text': 'anchor \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n', 'tags': '', 'url': 'w16_exam3.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中.', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};