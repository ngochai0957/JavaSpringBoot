PGDMP  '    /            	    |         
   quanlydiem    16.4    16.4 Q    W           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            X           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            Y           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            Z           1262    16397 
   quanlydiem    DATABASE     �   CREATE DATABASE quanlydiem WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE quanlydiem;
                postgres    false            �            1259    49978 
   chitietlop    TABLE     �   CREATE TABLE public.chitietlop (
    machitiet character varying(255) NOT NULL,
    masv character varying(255),
    malop character varying(255)
);
    DROP TABLE public.chitietlop;
       public         heap    postgres    false            �            1259    49977    chitietlop_machitiet_seq    SEQUENCE     �   CREATE SEQUENCE public.chitietlop_machitiet_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.chitietlop_machitiet_seq;
       public          postgres    false    230            [           0    0    chitietlop_machitiet_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.chitietlop_machitiet_seq OWNED BY public.chitietlop.machitiet;
          public          postgres    false    229            �            1259    49191    chitietlop_seq    SEQUENCE     x   CREATE SEQUENCE public.chitietlop_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.chitietlop_seq;
       public          postgres    false            �            1259    50187    chitietlophoc    TABLE     �   CREATE TABLE public.chitietlophoc (
    mactlh integer NOT NULL,
    macthp character varying(255),
    masv character varying(255)
);
 !   DROP TABLE public.chitietlophoc;
       public         heap    postgres    false            �            1259    50186    chitietlophoc_mactlh_seq    SEQUENCE     �   CREATE SEQUENCE public.chitietlophoc_mactlh_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.chitietlophoc_mactlh_seq;
       public          postgres    false    235            \           0    0    chitietlophoc_mactlh_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.chitietlophoc_mactlh_seq OWNED BY public.chitietlophoc.mactlh;
          public          postgres    false    234            �            1259    50195    diem    TABLE     �   CREATE TABLE public.diem (
    maloaidiem integer NOT NULL,
    chitiet character varying(255),
    tenloaidiem character varying(255)
);
    DROP TABLE public.diem;
       public         heap    postgres    false            �            1259    50202    diem_seq    SEQUENCE     r   CREATE SEQUENCE public.diem_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.diem_seq;
       public          postgres    false            �            1259    49911 	   giangvien    TABLE     �   CREATE TABLE public.giangvien (
    magv character varying(255) NOT NULL,
    hoten character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    sdt character varying(255),
    matkhau character varying(255) NOT NULL
);
    DROP TABLE public.giangvien;
       public         heap    postgres    false            �            1259    32770    giangvien_seq    SEQUENCE     w   CREATE SEQUENCE public.giangvien_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.giangvien_seq;
       public          postgres    false            �            1259    49920    hocphan    TABLE     �   CREATE TABLE public.hocphan (
    mahocphan character varying(255) NOT NULL,
    tenhocphan character varying(255) NOT NULL,
    sotinchi integer NOT NULL
);
    DROP TABLE public.hocphan;
       public         heap    postgres    false            �            1259    32778    hocphan_seq    SEQUENCE     u   CREATE SEQUENCE public.hocphan_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.hocphan_seq;
       public          postgres    false            �            1259    49954    ketqua    TABLE     q  CREATE TABLE public.ketqua (
    maketqua bigint NOT NULL,
    masv character varying(255),
    macthp character varying(255),
    maloaidiem integer,
    diem double precision,
    diemquatrinh double precision,
    diemthi double precision,
    thoigiancapnhat timestamp(6) without time zone,
    thoigiantao timestamp(6) without time zone,
    id bigint NOT NULL
);
    DROP TABLE public.ketqua;
       public         heap    postgres    false            �            1259    50169    ketqua_id_seq    SEQUENCE     �   ALTER TABLE public.ketqua ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.ketqua_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    228            �            1259    49953    ketqua_maketqua_seq    SEQUENCE     �   CREATE SEQUENCE public.ketqua_maketqua_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.ketqua_maketqua_seq;
       public          postgres    false    228            ]           0    0    ketqua_maketqua_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.ketqua_maketqua_seq OWNED BY public.ketqua.maketqua;
          public          postgres    false    227            �            1259    50012    lichsudangnhap    TABLE     �   CREATE TABLE public.lichsudangnhap (
    id bigint NOT NULL,
    email character varying(255),
    thoigiandangnhap timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    thoigiandangxuat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 "   DROP TABLE public.lichsudangnhap;
       public         heap    postgres    false            �            1259    50011    lichsudangnhap_id_seq    SEQUENCE     �   CREATE SEQUENCE public.lichsudangnhap_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.lichsudangnhap_id_seq;
       public          postgres    false    232            ^           0    0    lichsudangnhap_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.lichsudangnhap_id_seq OWNED BY public.lichsudangnhap.id;
          public          postgres    false    231            �            1259    49945    loaidiem    TABLE     �   CREATE TABLE public.loaidiem (
    maloaidiem integer NOT NULL,
    tenloaidiem character varying(100) NOT NULL,
    chitiet text
);
    DROP TABLE public.loaidiem;
       public         heap    postgres    false            �            1259    49944    loaidiem_maloaidiem_seq    SEQUENCE     �   CREATE SEQUENCE public.loaidiem_maloaidiem_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.loaidiem_maloaidiem_seq;
       public          postgres    false    226            _           0    0    loaidiem_maloaidiem_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.loaidiem_maloaidiem_seq OWNED BY public.loaidiem.maloaidiem;
          public          postgres    false    225            �            1259    49906    lop    TABLE     s   CREATE TABLE public.lop (
    malop character varying(255) NOT NULL,
    tenlop character varying(255) NOT NULL
);
    DROP TABLE public.lop;
       public         heap    postgres    false            �            1259    49925 
   lophocphan    TABLE     �  CREATE TABLE public.lophocphan (
    macthp character varying(255) NOT NULL,
    namhoc character varying(255) NOT NULL,
    hocky integer NOT NULL,
    mota character varying(255),
    thoigiantao timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    thoigiancapnhat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    mahocphan character varying(255),
    magv character varying(255),
    nhomhp character varying(255)
);
    DROP TABLE public.lophocphan;
       public         heap    postgres    false            �            1259    49898    sinhvien    TABLE     �  CREATE TABLE public.sinhvien (
    masv character varying(255) NOT NULL,
    hoten character varying(255) NOT NULL,
    ngaysinh date,
    gioitinh character varying(255),
    email character varying(255) NOT NULL,
    CONSTRAINT sinhvien_gioitinh_check CHECK (((gioitinh)::text = ANY (ARRAY[('Nam'::character varying)::text, ('Nữ'::character varying)::text, ('Khác'::character varying)::text])))
);
    DROP TABLE public.sinhvien;
       public         heap    postgres    false            �            1259    24603    sinhvien_seq    SEQUENCE     v   CREATE SEQUENCE public.sinhvien_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.sinhvien_seq;
       public          postgres    false            �            1259    24583 	   users_seq    SEQUENCE     s   CREATE SEQUENCE public.users_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
     DROP SEQUENCE public.users_seq;
       public          postgres    false            �           2604    50026    chitietlop machitiet    DEFAULT     |   ALTER TABLE ONLY public.chitietlop ALTER COLUMN machitiet SET DEFAULT nextval('public.chitietlop_machitiet_seq'::regclass);
 C   ALTER TABLE public.chitietlop ALTER COLUMN machitiet DROP DEFAULT;
       public          postgres    false    230    229    230            �           2604    50190    chitietlophoc mactlh    DEFAULT     |   ALTER TABLE ONLY public.chitietlophoc ALTER COLUMN mactlh SET DEFAULT nextval('public.chitietlophoc_mactlh_seq'::regclass);
 C   ALTER TABLE public.chitietlophoc ALTER COLUMN mactlh DROP DEFAULT;
       public          postgres    false    235    234    235            �           2604    50176    ketqua maketqua    DEFAULT     r   ALTER TABLE ONLY public.ketqua ALTER COLUMN maketqua SET DEFAULT nextval('public.ketqua_maketqua_seq'::regclass);
 >   ALTER TABLE public.ketqua ALTER COLUMN maketqua DROP DEFAULT;
       public          postgres    false    228    227    228            �           2604    50092    lichsudangnhap id    DEFAULT     v   ALTER TABLE ONLY public.lichsudangnhap ALTER COLUMN id SET DEFAULT nextval('public.lichsudangnhap_id_seq'::regclass);
 @   ALTER TABLE public.lichsudangnhap ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    232    232            �           2604    49948    loaidiem maloaidiem    DEFAULT     z   ALTER TABLE ONLY public.loaidiem ALTER COLUMN maloaidiem SET DEFAULT nextval('public.loaidiem_maloaidiem_seq'::regclass);
 B   ALTER TABLE public.loaidiem ALTER COLUMN maloaidiem DROP DEFAULT;
       public          postgres    false    226    225    226            M          0    49978 
   chitietlop 
   TABLE DATA           <   COPY public.chitietlop (machitiet, masv, malop) FROM stdin;
    public          postgres    false    230   B^       R          0    50187    chitietlophoc 
   TABLE DATA           =   COPY public.chitietlophoc (mactlh, macthp, masv) FROM stdin;
    public          postgres    false    235   X_       S          0    50195    diem 
   TABLE DATA           @   COPY public.diem (maloaidiem, chitiet, tenloaidiem) FROM stdin;
    public          postgres    false    236   la       E          0    49911 	   giangvien 
   TABLE DATA           E   COPY public.giangvien (magv, hoten, email, sdt, matkhau) FROM stdin;
    public          postgres    false    222   �a       F          0    49920    hocphan 
   TABLE DATA           B   COPY public.hocphan (mahocphan, tenhocphan, sotinchi) FROM stdin;
    public          postgres    false    223   �a       K          0    49954    ketqua 
   TABLE DATA           �   COPY public.ketqua (maketqua, masv, macthp, maloaidiem, diem, diemquatrinh, diemthi, thoigiancapnhat, thoigiantao, id) FROM stdin;
    public          postgres    false    228   pb       O          0    50012    lichsudangnhap 
   TABLE DATA           W   COPY public.lichsudangnhap (id, email, thoigiandangnhap, thoigiandangxuat) FROM stdin;
    public          postgres    false    232   de       I          0    49945    loaidiem 
   TABLE DATA           D   COPY public.loaidiem (maloaidiem, tenloaidiem, chitiet) FROM stdin;
    public          postgres    false    226   Mh       D          0    49906    lop 
   TABLE DATA           ,   COPY public.lop (malop, tenlop) FROM stdin;
    public          postgres    false    221   h       G          0    49925 
   lophocphan 
   TABLE DATA           x   COPY public.lophocphan (macthp, namhoc, hocky, mota, thoigiantao, thoigiancapnhat, mahocphan, magv, nhomhp) FROM stdin;
    public          postgres    false    224   �h       C          0    49898    sinhvien 
   TABLE DATA           J   COPY public.sinhvien (masv, hoten, ngaysinh, gioitinh, email) FROM stdin;
    public          postgres    false    220   �i       `           0    0    chitietlop_machitiet_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.chitietlop_machitiet_seq', 80, true);
          public          postgres    false    229            a           0    0    chitietlop_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.chitietlop_seq', 1, false);
          public          postgres    false    219            b           0    0    chitietlophoc_mactlh_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.chitietlophoc_mactlh_seq', 110, true);
          public          postgres    false    234            c           0    0    diem_seq    SEQUENCE SET     7   SELECT pg_catalog.setval('public.diem_seq', 1, false);
          public          postgres    false    237            d           0    0    giangvien_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.giangvien_seq', 1, false);
          public          postgres    false    217            e           0    0    hocphan_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.hocphan_seq', 1, false);
          public          postgres    false    218            f           0    0    ketqua_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.ketqua_id_seq', 120, true);
          public          postgres    false    233            g           0    0    ketqua_maketqua_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.ketqua_maketqua_seq', 125, true);
          public          postgres    false    227            h           0    0    lichsudangnhap_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.lichsudangnhap_id_seq', 42, true);
          public          postgres    false    231            i           0    0    loaidiem_maloaidiem_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.loaidiem_maloaidiem_seq', 1, false);
          public          postgres    false    225            j           0    0    sinhvien_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.sinhvien_seq', 1, false);
          public          postgres    false    216            k           0    0 	   users_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.users_seq', 1, false);
          public          postgres    false    215            �           2606    50028    chitietlop chitietlop_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.chitietlop
    ADD CONSTRAINT chitietlop_pkey PRIMARY KEY (machitiet);
 D   ALTER TABLE ONLY public.chitietlop DROP CONSTRAINT chitietlop_pkey;
       public            postgres    false    230            �           2606    50194     chitietlophoc chitietlophoc_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.chitietlophoc
    ADD CONSTRAINT chitietlophoc_pkey PRIMARY KEY (mactlh);
 J   ALTER TABLE ONLY public.chitietlophoc DROP CONSTRAINT chitietlophoc_pkey;
       public            postgres    false    235            �           2606    50201    diem diem_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.diem
    ADD CONSTRAINT diem_pkey PRIMARY KEY (maloaidiem);
 8   ALTER TABLE ONLY public.diem DROP CONSTRAINT diem_pkey;
       public            postgres    false    236            �           2606    50065    giangvien giangvien_email_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.giangvien
    ADD CONSTRAINT giangvien_email_key UNIQUE (email);
 G   ALTER TABLE ONLY public.giangvien DROP CONSTRAINT giangvien_email_key;
       public            postgres    false    222            �           2606    50058    giangvien giangvien_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.giangvien
    ADD CONSTRAINT giangvien_pkey PRIMARY KEY (magv);
 B   ALTER TABLE ONLY public.giangvien DROP CONSTRAINT giangvien_pkey;
       public            postgres    false    222            �           2606    50072    hocphan hocphan_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.hocphan
    ADD CONSTRAINT hocphan_pkey PRIMARY KEY (mahocphan);
 >   ALTER TABLE ONLY public.hocphan DROP CONSTRAINT hocphan_pkey;
       public            postgres    false    223            �           2606    50178    ketqua ketqua_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.ketqua
    ADD CONSTRAINT ketqua_pkey PRIMARY KEY (maketqua);
 <   ALTER TABLE ONLY public.ketqua DROP CONSTRAINT ketqua_pkey;
       public            postgres    false    228            �           2606    50094 "   lichsudangnhap lichsudangnhap_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.lichsudangnhap
    ADD CONSTRAINT lichsudangnhap_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.lichsudangnhap DROP CONSTRAINT lichsudangnhap_pkey;
       public            postgres    false    232            �           2606    49952    loaidiem loaidiem_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.loaidiem
    ADD CONSTRAINT loaidiem_pkey PRIMARY KEY (maloaidiem);
 @   ALTER TABLE ONLY public.loaidiem DROP CONSTRAINT loaidiem_pkey;
       public            postgres    false    226            �           2606    50105    lop lop_pkey 
   CONSTRAINT     M   ALTER TABLE ONLY public.lop
    ADD CONSTRAINT lop_pkey PRIMARY KEY (malop);
 6   ALTER TABLE ONLY public.lop DROP CONSTRAINT lop_pkey;
       public            postgres    false    221            �           2606    50114    lophocphan lophocphan_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.lophocphan
    ADD CONSTRAINT lophocphan_pkey PRIMARY KEY (macthp);
 D   ALTER TABLE ONLY public.lophocphan DROP CONSTRAINT lophocphan_pkey;
       public            postgres    false    224            �           2606    50165    sinhvien sinhvien_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.sinhvien
    ADD CONSTRAINT sinhvien_email_key UNIQUE (email);
 E   ALTER TABLE ONLY public.sinhvien DROP CONSTRAINT sinhvien_email_key;
       public            postgres    false    220            �           2606    50148    sinhvien sinhvien_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.sinhvien
    ADD CONSTRAINT sinhvien_pkey PRIMARY KEY (masv);
 @   ALTER TABLE ONLY public.sinhvien DROP CONSTRAINT sinhvien_pkey;
       public            postgres    false    220            �           2606    50106     chitietlop chitietlop_malop_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.chitietlop
    ADD CONSTRAINT chitietlop_malop_fkey FOREIGN KEY (malop) REFERENCES public.lop(malop) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.chitietlop DROP CONSTRAINT chitietlop_malop_fkey;
       public          postgres    false    221    230    4754            �           2606    50149    chitietlop chitietlop_masv_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.chitietlop
    ADD CONSTRAINT chitietlop_masv_fkey FOREIGN KEY (masv) REFERENCES public.sinhvien(masv) ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.chitietlop DROP CONSTRAINT chitietlop_masv_fkey;
       public          postgres    false    230    220    4752            �           2606    50120    ketqua ketqua_macthp_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ketqua
    ADD CONSTRAINT ketqua_macthp_fkey FOREIGN KEY (macthp) REFERENCES public.lophocphan(macthp) ON DELETE CASCADE;
 C   ALTER TABLE ONLY public.ketqua DROP CONSTRAINT ketqua_macthp_fkey;
       public          postgres    false    224    228    4762            �           2606    49972    ketqua ketqua_maloaidiem_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ketqua
    ADD CONSTRAINT ketqua_maloaidiem_fkey FOREIGN KEY (maloaidiem) REFERENCES public.loaidiem(maloaidiem) ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.ketqua DROP CONSTRAINT ketqua_maloaidiem_fkey;
       public          postgres    false    4764    226    228            �           2606    50159    ketqua ketqua_masv_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ketqua
    ADD CONSTRAINT ketqua_masv_fkey FOREIGN KEY (masv) REFERENCES public.sinhvien(masv) ON DELETE CASCADE;
 A   ALTER TABLE ONLY public.ketqua DROP CONSTRAINT ketqua_masv_fkey;
       public          postgres    false    4752    220    228            �           2606    50099 (   lichsudangnhap lichsudangnhap_email_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.lichsudangnhap
    ADD CONSTRAINT lichsudangnhap_email_fkey FOREIGN KEY (email) REFERENCES public.giangvien(email) ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.lichsudangnhap DROP CONSTRAINT lichsudangnhap_email_fkey;
       public          postgres    false    232    4756    222            �           2606    50125    lophocphan lophocphan_magv_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.lophocphan
    ADD CONSTRAINT lophocphan_magv_fkey FOREIGN KEY (magv) REFERENCES public.giangvien(magv) ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.lophocphan DROP CONSTRAINT lophocphan_magv_fkey;
       public          postgres    false    222    4758    224            �           2606    50130 $   lophocphan lophocphan_mahocphan_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.lophocphan
    ADD CONSTRAINT lophocphan_mahocphan_fkey FOREIGN KEY (mahocphan) REFERENCES public.hocphan(mahocphan) ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.lophocphan DROP CONSTRAINT lophocphan_mahocphan_fkey;
       public          postgres    false    223    224    4760            M     x�m�In1��a"�a����9b�+��YU��| �`9G@��%T �u:.@J6]1jN�A��uP�_�H\��rr�tyf8�S(���t��B{�4���>�6�pp�N
$L�PO�q���/��1�k`z��݋�̴n�}��P���u|��z���t�.@�����e����~���N�w�'��]�"r�{�-{��r��{=�m"4���_'Rn�����Y���y�颀�]�=�Y�̀w/?�k�_�v�      R     x�m�;�[AC����4)S���בl�[�9��������of�:?q�6�(aA�@54I�I���&1��u��
�gn�[k#�o����:�I����l��s�2��R�<L�@%�H�j�@��Ih��!q�"��f�KZ�	��9HhM�&�ޥd������s�8d����h�����|3�!+���;X�9�l�*G�3ЬrA�-�
��\G�4��Q[�(y�f~��Q�]7�	�١�R7n���x�[<�-��y�Ǽ�c��1o�xi�w�1@��$����My�//Ra���t�H��g �W�	t/*����Dm{��Җ�� ]�K���e@��r��q���w�W���q���Η�����W�� �Nm���t;��vjν��	t;��vj7�p;�?��:u����۩�@�Sǀn��{{:u��N�Dz;u
�v�|h{]�нTa�g}
x3 ��70��K�����ަY%n��yF�[¨r�F�]���D��,�1      S      x������ � �      E   L   x�s300�t:�3S�/����d���gr��'g$fX��;��&f��%��r����s�p��qqq 6*�      F   {   x��000��?�0O!��@r��dN#.��T���`�����s�%�9���*M8/J��M92/,Q()�|��9O���y�
)w/RIwmRHZ�8�^�P ������ �E;E      K   �  x���K��8�p��@Txm��*5�Y���8!ն9�*�˫v����h"�������#�AG��ȃ�`d�F���/ҋ�R>�y��_���<"�@p�Zrb범�����Y�K�Ev&!e��хP�A��fA�B��v��A�����|C0}��CHRm���] ��|�P�y�Ee��g�\�hf���l>j���t�;��~�]�gj8�G�J��8D�	}�|x�U�{]j�Ij�K�Z���B�Dn���Љ���$�G����f�6�ć��ꄾ]��B<�%�K�Я��i�lj1� �y���|�����6$������40����T�US��X,ǙB�:ǉu0�l�����m{��1F�Ӑ�#l`���7���bl�i�!����m�5HȆ�`q7�ީW�.xU�!�Nm������E>�oE`���ߊ 9'jEPH��"4H��"$ωZR�D��s�V��l}����!�6�{Az�6���S��uA ���F'S�G#�w�Vu"�6r�Vw���8���"�����v$��_L7��G�w�HVͣ�an<J�����lǐ2�C�ꨈ�~�ήW3)�����j&ep7"r��R�ߵ��֗��)���3ÒQ9�6�\V�����%�rJ�,�t�[2*�4N�Og�%�rJ�<�������J��KF��ނhg�T9��T�;��5�2FNekC���q�L�ΕKF�9ݹ�~� �/��T�      O   �  x���;�9E�Ux��(��
�l�x��PU��G/h�]\6�:�����חo��C�������?�_?�H>"|�����/'!��B���ƃZ��"4�C�O�餌pܫV��Jdo���pт\�S$냪&��*�-1�,�k���2�
n�7\���/w��.�`KiiN%�S�0S�!F����� p���tQ�P�j��i�
�ֈ
.Vf��rx�U��d�����W����4#�w�E�<�(�ʽ���'���
�i�8�ŏ���!dl���Mqq��2�.6(>E�u�+�/�8�{���H�9���y����9�o�^6]��䏈z�Xj��v�=�9	��uX�:�¹f!v�}�WŰ�A�/�B�8���l,�}"���같��z�o�ԡ�dsԁ��Б��ۜZ��i1+�������
�C�XD��ԁ6�A���:� ���n�n�Ԡ��H%U}���j�2��%5h~<5;#<$�]�u_���M@ݳ+ �Asٸ����.��A��X��[2O)v#XYA>�A��)��T�I1*yrp���S���!1���r�7(<^�q-͵�ܡ��~�	�}"j�f;_��>�\�uƆ��;����0w�:qGtE�v7ߡ�z�W�]��/�����{�� �o֬��!:o�(f��bBYu%��R��C�����3.t|�c��ڪ�      I   "   x�3�t���2�tQF�N ʐ�D��qqq by�      D   A   x�5�!� @�<�s9"j!(������������S3���a ��z��M����C_�(;���<�      G   �   x�}�A
�@���)z�I&�Lfۅ� .ĕ���+=�ޠ��j+�	��'�~� C@\vC�&o%j��<$�1�>�eiu @d��3zsm��KqjDP &�	��ȁ�"B��(
{�ɱmsF�7t;�R�䣓�Z}EC/����T<��}p��� p���LM��Yk_AgK      C   �  x�mV�n�V]�_�`p���.5�GuP#�lh�����F�.�.�-�q��H��Y("�Ȃ���ҙ��ś�����3g�c�+��T�r�������iY�6�ׁ`LFLG�ˬ
j�J^W��
��i�����<Z5�	#<��.n��uxQ���oV�D\�~�w����mQn�����"΋~w_��u��i.���G�Y��"��u�*2B�yH��4��s���^�m���������E�<��
���P��2���҇�	3�Y��-.</�Q1qC@�����7⥸��81���^#-������H8��y%�Ih���R���i����
,���C�Ѻl�[��hJ��\��������:FO�*����\a9ݶ@�eY5CS�s�Z��ˇw�P"��{S9�E$�z*���YE��xP	0;du�ܿ3�w�T��P_����#F1K�ax!����Ƴ�F$1��le-%n�����K�@��NZ$��79(N���L�>8�2z�����|��G��Єa������Ux��~k'N�N8��fu�5D���$�uzꃅm�c������\���WI$���%\ ��<�08���p�if< ��tsl�D��҈����Z׻��F�5�{o�gM�����%K�LBr�w����s��%�c5�����y �=IB�����nzxg�4�ݡqh���4���������H��J�N�<ќ1��$	]i���c�()���\��ʼ%J�3�� � �_���t0 E�7MM8Z��2��������p`)�/����=H���x�1�݊��F��,�'�Z٨���ؗ�C���Κ������i+3�/�d �(��@����Ť�@�d�� cL�����|�}�@���ܑ�H�<g�+��Cb:�΋nG��ѝ�:����uA33o�b�`���%p���(�l�B�������7qL��LVް����`Q��:�Y�(v�q��)�<[��-a����8���q�@�,�����6�6���D�����`�IDa�R��C���b� �ңLX4��$".'� �#B�K�h)��A~oǅSG�sǝ���3qǽ5<Y1񄜭�a�h&��͠��p����kU8�b:f�����\�X<?eM��jG�-^���^�������d�����0�x����䄡g���~>/�/��vÿ�|��Uכ���������N�Y     