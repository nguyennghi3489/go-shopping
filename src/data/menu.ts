export const data = [
    {
        id: 0,
        label: "Thiết Bị Điện tử",
    },
    {
        id: 1,
        label: "Sức Khỏe & Làm Đẹp",
        children: [
            { id: 11, label: "Chăm Sóc Da" },
            { id: 12, label: "Trang Điểm" },
        ],
    },
    {
        id: 2,
        label: "Phụ Kiện Thời Trang",
        children: [
            {
                id: 21,
                label: "Trang Sức Nam",
                children: [
                    { id: 211, label: "Đồng Hồ Nam" },
                    { id: 212, label: "Quần Áo" },
                    { id: 213, label: "Trang Phục Nam" },
                    { id: 214, label: "Giầy Dép Nam" },
                ],
            },
            { id: 22, label: "Kính Mát" },
            { id: 23, label: "Túi Du Lịch" },
            {
                id: 24,
                label: "Trang Sức Nữ",
                children: [
                    { id: 241, label: "Vòng Tay" },
                    { id: 242, label: "Vòng Cổ" },
                    { id: 243, label: "Nhẫn" },
                    { id: 244, label: "Quần Áo" },
                ],
            },
        ],
    },
];
