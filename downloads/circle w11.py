from browser import html
from browser import document as doc

# 利用 html 建立 canvas 超文件物件
canvas = html.CANVAS(width = 400, height = 400)
brython_div = doc["brython_div1"]
brython_div <= canvas

# 每一格的 pixel 數
gs = 20

# gs*tc = canvas width and height

ctx = canvas.getContext("2d")

def dRect(lux, luy, w, h, s=1, c='#ff0000'):
    ctx.lineWidth = s
    ctx.strokeStyle = c
    ctx.beginPath()
    ctx.rect(lux, luy, w, h)
    ctx.stroke()

def grid(width, height, grid_pix):
    # x 方向共 width 格
    # y 方向共 height 格
    # grid_pix, 每一個的 pixel 點數
    # 利用迴圈與座標增量繪圖
    for i in range(width):
        for j in range(height):
            dRect(i*grid_pix, j*grid_pix, grid_pix, grid_pix, 1, "lightgrey")

def fill(x, y, color):
    ctx.fillStyle = color
    ctx.fillRect(x-1, y-1, gs, gs)

# 繪製圓形邊界
def draw_circle_boundary(center_x, center_y, radius, color="black"):
    ctx.beginPath()
    ctx.arc(center_x * gs + gs // 2, center_y * gs + gs // 2, radius * gs, 0, 2 * 3.14159)
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.stroke()

# 繪製圓形內部
def draw_circle(center_x, center_y, radius, color="blue"):
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(center_x * gs + gs // 2, center_y * gs + gs // 2, radius * gs, 0, 2 * 3.14159)
    ctx.fill()

# 畫網格
grid(10, 10, 20)

# 畫圓形邊界
draw_circle_boundary(5, 5, 3, "black")

# 填充圓形
draw_circle(5, 5, 3, "blue")